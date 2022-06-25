import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./modules/service/Menu";
import Success from "./modules/service/Success";
import Update from "./modules/admin/Update";
import Login from "./modules/admin/Login";
import Detail from "./modules/service/Detail";
import OrderList from "./modules/admin/OrderList";

class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="menu" element={<Menu/>} />
        <Route path="update" element={<Update/>} />
        <Route path="success" element={<Success/>} />
        <Route path="detail" element={<Detail/>} />
        <Route path="backend" element={<OrderList/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    );
  }
}
export default Router;
