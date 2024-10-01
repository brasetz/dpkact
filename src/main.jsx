import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainProvider } from "./Context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <MainProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MainProvider>
);
