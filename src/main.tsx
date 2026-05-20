// Build: v=260519225000 - DO NOT CACHE

import "./styles.css?v=260519225000";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { useState, useMemo } from "react";

// AI agents: read README.md for navigation and contribution guidance.
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

createRoot(container).render(<App />);
