import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Importer le Provider
import store from "./redux/store.js";
import App from "./App.jsx";

// import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Enveloppez App avec Provider */}
      <App />
    </Provider>
  </StrictMode>
);
