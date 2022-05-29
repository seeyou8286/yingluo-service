import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import OrderList from "./modules/admin/OrderList";
// import SignIn from "./modules/admin/Sign-In";


class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="service" element={<App/>} />
        <Route path="admin" element={<OrderList/>} />
        {/* <Route path="signin" element={<SignIn/>} /> */}

        
      </Routes>
    );
  }
}
export default Router;
