import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App2.jsx'

// import App from './App2.jsx'
// import App from "/App3.jsx";
// import App from "/App4.jsx";
// import App from "/App5.jsx";
// import App from "/App6.jsx";
import App from "/App7.jsx";


import { BrowserRouter } from "react-router-dom";
import App7 from './../App7';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
