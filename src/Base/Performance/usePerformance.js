import { useEffect, useState } from "react";
import { onCLS, onINP, onLCP } from "web-vitals";

export const DEFAULT_METRIC_VALUE = Object.freeze({ value: 0, rating: "good" });

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
