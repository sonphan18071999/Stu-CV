import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { MainRoutes } from "./routes/route";

// Create a root with concurrent mode
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Disable StrictMode in production for better performance
if (process.env.NODE_ENV === "production") {
  root.render(<MainRoutes />);
} else {
  root.render(
    <React.StrictMode>
      <MainRoutes />
    </React.StrictMode>
  );
}

// Only measure performance in non-production
if (process.env.NODE_ENV !== "production") {
  reportWebVitals(console.log);
} else {
  reportWebVitals();
}
