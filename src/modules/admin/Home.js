import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {



  render() {
    return (
      <div>
        <div>Home</div>
        <div>
          <Link to="/Page1" style={{ color: "black" }}>
            <div>点击跳转到Page1</div>
          </Link>
          <Link to="/Page2" style={{ color: "black" }}>
            <div>点击跳转到Page2</div>
          </Link>
          <Link to="/Page3" style={{ color: "black" }}>
            <div>点击跳转到Page3</div>
          </Link>
          <a href="/Page3">Go page4</a>
        </div>
      </div>
    );
  }
}

export default Home;
