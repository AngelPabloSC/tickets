import React from "react";
import { useRoutes } from "react-router-dom";
import router from "./router/indexRoute";

const App = () => {
  const routes = useRoutes(router);
  return <>{routes}</>;
};

export default App;
