import "./styles.css";

import { createRoot } from "react-dom/client";

import { Hero } from "./Hero";
import { PerformanceDebugger } from "./Performance";
import { Search } from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <Hero />
    <Search />
    <PerformanceDebugger />
  </div>,
);
