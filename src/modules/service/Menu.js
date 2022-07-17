import "../../App.css";
import React, { useEffect, useState } from "react";
import ServiceOrderPic from "../../assets/menu.jpeg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// import Link from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import config from "../../../config/default.json";
import ItemDetail from "./ItemDetail";

const backendurl = config.backendurl;

var sectionStyle = {
  backgroundImage: `url(${ServiceOrderPic})`,
};

function allAreFalse(arr) {
  return arr.every((element) => element === false);
}

var defaultValues = {
  item: [false, false, false, false, false],
  itemQuantity: [1, 1, 1, 1, 1],
  feature: [false, false, false, false],
  featureQuantity: [1, 1, 1, 1],
  oilType: [false, false, false, false, false],
  topup: [false, false, false],
  source: [false, false, false, false, false, false, false],
  oilVolumn: [false, false, false],
  strength: [false, false, false],
  phoneNumber: "",
  customer: "",
  employee: "",
  others: "",
  place: "",
};


function Menu(props) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(defaultValues);
  const [isAlerted, setAlert] = useState("hidden");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    console.log(defaultValues)
    defaultValues.place = props.place;
  }, []);

  function isPhone(phone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      allAreFalse(formValues.item) &&
      allAreFalse(formValues.feature) &&
      !formValues.others
    ) {
      setAlert("visible");
      setAlertMessage("请选择项目,亲");
      return;
    } else if (allAreFalse(formValues.oilType)) {
      setAlert("visible");
      setAlertMessage("请选择精油,亲");
      return;
    } else if (allAreFalse(formValues.strength)) {
      setAlert("visible");
      setAlertMessage("请选择受力强度,亲");
      return;
    } else if (allAreFalse(formValues.oilVolumn)) {
      setAlert("visible");
      setAlertMessage("请选择精油使用量,亲");
      return;
    } else if (formValues.phoneNumber == "") {
      setAlert("visible");
      setAlertMessage("手机号必填哦！");
      return;
    } else if (formValues.customer == "") {
      setAlert("visible");
      setAlertMessage("客户名必填哦！");
      return;
    } else if (!isPhone(formValues.phoneNumber)) {
      setAlert("visible");
      setAlertMessage("手机号格式错误！");
      return;
    }

    
    fetch(`${backendurl}/save`, {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.status == 'success') {
          navigate("/success");
          defaultValues = {
            item: [false, false, false, false, false],
            itemQuantity: [1, 1, 1, 1, 1],
            feature: [false, false, false, false],
            featureQuantity: [1, 1, 1, 1],
            oilType: [false, false, false, false, false],
            topup: [false, false, false],
            source: [false, false, false, false, false, false, false],
            oilVolumn: [false, false, false],
            strength: [false, false, false],
            phoneNumber: "",
            customer: "",
            employee: "",
            others: "",
            place: "",
          };
        } else {
          navigate("/fail");
          defaultValues = formValues;
        }
      })
      .catch((err) => {
        navigate("/fail");
        defaultValues = formValues;
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleMultiInput = (e, index) => {
    const { name, checked } = e.target;
    let values = formValues[name];
    values[index] = checked;
    setFormValues({
      ...formValues,
      [name]: values,
    });
  };

  const handleMultipleInputValue = (e, index, item) => {
    const { name, value } = e.target;
    let values = formValues[name];
    if (formValues[item][index] == true) {
      values[index] = value;
    }
    setFormValues({
      ...formValues,
      [name]: values,
    });
  };

  const handleSingleInput = (e, index, size) => {
    const { name, checked } = e.target;
    let values = [];
    for (var i = 0; i < size; i++) {
      values[i] = false;
    }
    values[index] = checked;
    setFormValues({
      ...formValues,
      [name]: values,
    });
  };

  return (
    <form id="myform" onSubmit={handleSubmit}>
      <div className="box" style={sectionStyle}>
        <div className="left">
          <div className="leftpanel-1">
            <div>
              <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="298元" formValues={formValues} type="item" numberType="itemQuantity" index="0" label="【初之体验】 精油SPA&nbsp;&nbsp;60分钟" link="精油SPA"></ItemDetail>
              <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="188元" formValues={formValues} type="item" numberType="itemQuantity" index="1" label="【久坐之殇】肩背释压&nbsp;&nbsp;45分钟" link="肩背释压"></ItemDetail>
              <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="398元" formValues={formValues} type="item" numberType="itemQuantity" index="2" label="【元気臀震】强腰护肾&nbsp;&nbsp;60分钟" link="强腰护肾"></ItemDetail>
              <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="488元" formValues={formValues} type="item" numberType="itemQuantity" index="3" label="【熬夜必点】淋巴净排&nbsp;&nbsp;90分钟" link="淋巴净排"></ItemDetail>
              <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="588元" formValues={formValues} type="item" numberType="itemQuantity" index="4" label="【悠然舒展】奈良古态&nbsp;&nbsp;90分钟" link="奈良古态"></ItemDetail>
            </div>
          </div>
          <div className="leftpanel-2">
            <div>
            <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="628元" formValues={formValues} type="feature" numberType="featureQuantity" index="0" label="【奢宠女神】大阪樱花&nbsp;&nbsp;80分钟" link="大阪樱花"></ItemDetail>
            <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="688元" formValues={formValues} type="feature" numberType="featureQuantity" index="1" label="【店铺爆款】京都神乐&nbsp;&nbsp;90分钟" link="京都神乐"></ItemDetail>
            <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="888元" formValues={formValues} type="feature" numberType="featureQuantity" index="2" label="【净体祛湿】草津秘汤&nbsp;&nbsp;120分钟" link="草津秘汤"></ItemDetail>
            <ItemDetail onItemChange={handleMultiInput} onNumberChange={handleMultipleInputValue} price="988元" formValues={formValues} type="feature" numberType="featureQuantity" index="3" label="【倾心奢享】东京花筏&nbsp;&nbsp;90分钟" link="东京花筏"></ItemDetail>
            </div>
          </div>
          <div className="leftpanel-3">
            <div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oilType"
                      checked={formValues.oilType[0]}
                      onChange={(e) => handleSingleInput(e, "0", "5")}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="生榨椰子油【滋养肌肤】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oilType"
                      checked={formValues.oilType[1]}
                      onChange={(e) => handleSingleInput(e, "1", "5")}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="甜橙【保湿肌肤 • 平衡肌脂】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oilType"
                      checked={formValues.oilType[2]}
                      onChange={(e) => handleSingleInput(e, "2", "5")}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="茉莉花【魅力增强】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oilType"
                      checked={formValues.oilType[3]}
                      onChange={(e) => handleSingleInput(e, "3", "5")}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="薰衣草【镇静安神 • 放松心情】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oilType"
                      checked={formValues.oilType[4]}
                      onChange={(e) => handleSingleInput(e, "4", "5")}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="橄榄精油【轻盈舒缓】"
                />
              </div>
            </div>
            <div className="lastRow">
              <div style={{ width: "50%" }}>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="strength"
                        checked={formValues.strength[0]}
                        onChange={(e) => handleSingleInput(e, "0", "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="大力"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="strength"
                        checked={formValues.strength[1]}
                        onChange={(e) => handleSingleInput(e, "1", "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="适中"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="strength"
                        checked={formValues.strength[2]}
                        onChange={(e) => handleSingleInput(e, "2", "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="小力"
                  />
                </div>
              </div>
              <div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="oilVolumn"
                        checked={formValues.oilVolumn[0]}
                        onChange={(e) => handleSingleInput(e, "0", "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="加大量"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="oilVolumn"
                        checked={formValues.oilVolumn[1]}
                        onChange={(e) => handleSingleInput(e, "1", "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="加大"
                  />
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="oilVolumn"
                        checked={formValues.oilVolumn[2]}
                        onChange={(e) => handleSingleInput(e, "2", "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="正常"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="inner"></div>
          <div className="innerSource">
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[0]}
                  onChange={(e) => handleSingleInput(e, "0", "7")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={
                <Typography style={{ color: "white" }}>大众点评</Typography>
              }
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[1]}
                  onChange={(e) => handleSingleInput(e, "1", "7")}
                  color="success"
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={<Typography style={{ color: "white" }}>美团</Typography>}
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[2]}
                  onChange={(e) => handleSingleInput(e, "2", "7")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={<Typography style={{ color: "white" }}>小红书</Typography>}
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[3]}
                  onChange={(e) => handleSingleInput(e, "3", "7")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={
                <Typography style={{ color: "white", marginRight: "10px" }}>
                  抖音
                </Typography>
              }
            />

            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[4]}
                  onChange={(e) => handleSingleInput(e, "4", "7")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={<Typography style={{ color: "white" }}>会员</Typography>}
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[5]}
                  onChange={(e) => handleSingleInput(e, "5", "7")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={
                <Typography style={{ color: "white" }}>朋友介绍</Typography>
              }
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source"
                  checked={formValues.source[6]}
                  onChange={(e) => handleSingleInput(e, "6", "7")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 25, color: "white" },
                  }}
                />
              }
              label={<Typography style={{ color: "white" }}>其他</Typography>}
            />
          </div>
          <div className="innerTopup">
            <FormControlLabel
              control={
                <Checkbox
                  name="topup"
                  checked={formValues.topup[0]}
                  onChange={(e) => handleSingleInput(e, "0", "3")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 38, color: "white" },
                  }}
                />
              }
              label={
                <Typography style={{ color: "white" }}>充8000送4000</Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="topup"
                  checked={formValues.topup[1]}
                  onChange={(e) => handleSingleInput(e, "1", "3")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 38, color: "white" },
                  }}
                />
              }
              label={
                <Typography style={{ color: "white" }}>充5000送2000</Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="topup"
                  checked={formValues.topup[2]}
                  onChange={(e) => handleSingleInput(e, "2", "3")}
                  sx={{
                    color: "white",
                    "& .MuiSvgIcon-root": { fontSize: 38, color: "white" },
                  }}
                />
              }
              label={
                <Typography style={{ color: "white" }}>充3000送1000</Typography>
              }
            />
          </div>
          <div className="rightLastRow">
            <TextField
              style={{ width: "210px" }}
              name="phoneNumber"
              label="手机号(必填)"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
            />

            <TextField
              style={{ width: "210px" }}
              name="customer"
              label="客户名(必填)"
              value={formValues.customer}
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: "210px" }}
              name="employee"
              label="理疗师"
              value={formValues.employee}
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: "210px" }}
              name="others"
              label="其他"
              value={formValues.others}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-88px", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            visibility: `${isAlerted}`,
            paddingTop: "2px",
          }}
        >
          <Alert variant="filled" severity="error">
            {alertMessage}
          </Alert>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ backgroundColor: "black" }}
          >
            提交
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Menu;
