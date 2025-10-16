import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <ThemeProvider>
      
      <App />
      <ScrollToTop smooth />

    </ThemeProvider>
    
  </StrictMode>
);
