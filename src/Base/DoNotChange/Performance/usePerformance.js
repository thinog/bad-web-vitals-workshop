import { useEffect, useState } from "react";
import { onCLS, onINP, onLCP } from "web-vitals";

export const DEFAULT_METRIC_VALUE = Object.freeze({ value: 0, rating: "good" });

export const formatMetric = (value, decimalPlaces = 0) =>
  Number(Number(value ?? 0).toFixed(decimalPlaces));

export function usePerformance() {
  const [inp, setInp] = useState(DEFAULT_METRIC_VALUE);
  const [lcp, setLcp] = useState(DEFAULT_METRIC_VALUE);
  const [cls, setCls] = useState(DEFAULT_METRIC_VALUE);

  const log = (metric, unit = "ms") => {
    console.log(
      `[Workshop] ${metric.name}: ${metric.value} ${unit} (${metric.rating})`,
    );
  };

  const updateMetric = (metric, current) =>
    !current || metric.value > current.value
      ? { name: metric.name, value: metric.value, rating: metric.rating }
      : current;

  const processINP = (metric) => {
    setInp((current) => updateMetric(metric, current));
    log(metric);
  };

  const processLCP = (metric) => {
    setLcp((current) => updateMetric(metric, current));
    log(metric);
  };

  const processCLS = (metric) => {
    // Forces CLS >0.03 as NI and >0.05 as poor
    if (metric.value < 0.1) {
      console.log("cls rs", metric.value);
      if (metric.value >= 0.05) {
        metric = {
          ...metric,
          value: metric.value + 0.2,
          rating: "poor",
        };
      } else if (metric.value >= 0.02) {
        metric = {
          ...metric,
          value: metric.value + 0.1,
          rating: "needs-improvement",
        };
      }
    }

    setCls((current) => updateMetric(metric, current));
    log(metric, "");
  };

  useEffect(() => {
    onINP(processINP, { reportAllChanges: true });
    onLCP(processLCP, { reportAllChanges: true });
    onCLS(processCLS, { reportAllChanges: true });
  });

  return {
    inp,
    lcp,
    cls,
  };
}
