import "../../App.css";
import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// import Link from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";


function ItemDetail(props) {
  const values=props.formValues;

  const handleMultiInput = (e, index) => {
    props.onItemChange(e,index);
  };

  const handleMultipleInputValue = (e, index, item) => {
    props.onNumberChange(e,index,item);
  };
  

  return (
    <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={props.type}
                        checked={values[props.type][props.index]}
                        onChange={(e) => handleMultiInput(e, props.index)}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label={props.label}
                  />
                  <Link
                    to="/detail"
                    state={{ item: props.link }}
                    style={{
                      textDecoration: "none",
                      fontSize: "11px",
                      color: "inherit",
                    }}
                  >
                    详情
                  </Link>
                </div>
                <p className="price">{props.price}</p>
                <FormControl
                  sx={{ pr: 0, pt: 1, m: 0, minWidth: 5 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name={props.numberType}
                    value={values[props.numberType][props.index]}
                    onChange={(e) => handleMultipleInputValue(e, props.index, props.type)}
                  >
                    <MenuItem key="1" value="1">
                      1
                    </MenuItem>
                    <MenuItem key="2" value="2">
                      2
                    </MenuItem>
                    <MenuItem key="3 " value="3">
                      3
                    </MenuItem>
                    <MenuItem key="4 " value="4">
                      4
                    </MenuItem>
                    <MenuItem key="5 " value="5">
                      5
                    </MenuItem>
                    <MenuItem key="6 " value="6">
                      6
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
  );
}

export default ItemDetail;
