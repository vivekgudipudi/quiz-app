import App from "./App";
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, QuestDataProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuestDataProvider>
          <App />
        </QuestDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
