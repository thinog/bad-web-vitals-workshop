import "./performance.css";
import { formatMetric, usePerformance } from "./usePerformance";

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
