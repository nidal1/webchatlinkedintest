import React from "react";
import ReactDOM from "react-dom/client";
import RoutesManager from "./routesManager";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesManager />
    </Provider>
  </React.StrictMode>
);
