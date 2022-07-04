import React, { useState } from "react";
import SuccessPage from "../../assets/success.jpeg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

var sectionStyle = {
  backgroundImage: `url(${SuccessPage})`,
  paddingTop:"300px"
  
};

function Suceess() {
  const navigate = useNavigate();

  return(
  <div className="box" style={sectionStyle}>
    <div>
      <Typography variant="h4" style={{ color: "#e7e7e7",writingMode: "vertical-lr" }}>您已成功提交</Typography>
    </div>
    <div>
      <Button onClick={(e) => navigate("/menu")} variant="h4" type="submit" style={{margin:"55px", writingMode: "vertical-lr",backgroundColor: "#e7e7e7"}}>
        返<br/>
        回
      </Button>
    </div>
  </div>
  );
}

export default Suceess;
