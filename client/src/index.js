import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import Background from "./Background";
import Toggle from "./ThemeToggle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className="fixed z-50 right-0 top-0 mt-2 mr-2">
          <Toggle />
        </div>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
