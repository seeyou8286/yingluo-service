import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./modules/service/Menu";
import Success from "./modules/service/Success";
import Home from "./modules/admin/Home";
import Page1 from "./modules/admin/Page1";
import Page2 from "./modules/admin/Page2";
import Page3 from "./modules/admin/Page3";

import Demo from "./modules/service/Demo";
import OrderList from "./modules/admin/OrderList";
// import SignIn from "./modules/admin/Sign-In";


class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="menu" element={<Menu/>} />
        <Route path="success" element={<Success/>} />
        <Route path="demo" element={<Demo/>} />
        <Route path="backend" element={<OrderList/>} />
        {/* <Route path="signin" element={<SignIn/>} /> */}
      </Routes>
    );
  }
}
export default Router;
