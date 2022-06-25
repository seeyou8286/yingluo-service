import React, { useState } from "react";
import DetailPic from "../../assets/detail.jpeg";


var sectionStyle = {
  backgroundImage: `url(${DetailPic})`
};

const Detail = () => {
  
  return (
    <div className="imageScroll">
      <img src= {DetailPic}></img>

    </div>
  );
};
export default Detail;