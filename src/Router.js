import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./modules/service/App";
import Home from "./modules/admin/Home";
import Page1 from "./modules/admin/Page1";
import Page2 from "./modules/admin/Page2";
import Page3 from "./modules/admin/Page3";

import Form from "./modules/service/Demo";
import OrderList from "./modules/admin/OrderList";
// import SignIn from "./modules/admin/Sign-In";


class Router extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="app" element={<App/>} />
        <Route path="admin" element={<OrderList/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/Page1" element={<Page1/>} />
        <Route path="/Page2" element={<Page2/>} />
        <Route path="/Page3" element={<Page3/>} />
        {/* <Route path="signin" element={<SignIn/>} /> */}

        
      </Routes>
    );
  }
}
export default Router;
