import { createRoot } from "react-dom/client";

import { Logo } from "./Logo";
import { PerformanceDebugger } from "./performance";
import { Search } from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <Logo />
    <Search />
    <PerformanceDebugger />
  </div>,
);
