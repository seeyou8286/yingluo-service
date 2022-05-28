import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<App/>} />
      </Routes>
    );
  }
}
export default Router;
