import "./performance.css";
import { usePerformance } from "./usePerformance";

function formatMetric(value, decimalPlaces = 0) {
  return Number(Number(isNaN(value) ? 0 : value).toFixed(decimalPlaces));
}

export function PerformanceDebugger() {
  const { inp, lcp, cls } = usePerformance();

  return (
    <div className="performance-debugger">
      <span className={inp.rating}>INP: {formatMetric(inp.value)} ms</span>
      <span className={lcp.rating}>LCP: {formatMetric(lcp.value)} ms</span>
      <span className={cls.rating}>CLS: {formatMetric(cls.value, 2)}</span>
    </div>
  );
}
