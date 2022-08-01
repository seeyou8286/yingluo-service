import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./modules/service/Menu";
import Success from "./modules/service/Success";
import Fail from "./modules/service/Fail";
import Welcome from "./modules/service/Welcome";
import Update from "./modules/admin/Update";
import Login from "./modules/admin/Login";
import Detail from "./modules/service/Detail";
import OrderList from "./modules/admin/OrderList";

class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="" element={<Welcome/>} />
        <Route path="ns" element={<Menu place="南山别墅店"/>} />
        <Route path="sk" element={<Menu place="蛇口别墅店"/>} />
        <Route path="update" element={<Update/>} />
        <Route path="success" element={<Success/>} />
        <Route path="fail" element={<Fail/>} />
        <Route path="detail" element={<Detail/>} />
        <Route path="backend" element={<OrderList/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    );
  }
}
export default Router;
