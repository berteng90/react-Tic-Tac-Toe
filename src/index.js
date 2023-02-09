import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import GameBoard from "./Gameboard";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GameBoard />
  </StrictMode>
);
