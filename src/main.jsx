import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClaimProvider } from "./context/ClaimContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClaimProvider>
      <App />
    </ClaimProvider>
  </StrictMode>,
);
