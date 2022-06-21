import React, { useState } from "react";
import SuccessPage from "../../assets/success.jpeg";


var sectionStyle = {
  backgroundImage: `url(${SuccessPage})`,
};

function Suceess() {
  return <div className="box" style={sectionStyle}>
<h1 style={{color:"yellow"}}>您已成功提交</h1>

  </div>;
}

export default Suceess;
