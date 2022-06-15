import "../../App.css";
import React, { useState } from "react";
import ServiceOrderPic from "../../assets/service-2.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { pink, green } from "@mui/material/colors";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

var sectionStyle = {
  backgroundImage: `url(${ServiceOrderPic})`,
};

const defaultValues = {
  item: [false, false, false, false],
  itemQuantity: [1, 1, 1, 1],
  feature: [false, false, false,false],
  featureQuantity: [1, 1, 1, 1],
  oiltype: [false, false, false],
  topup: [false, false, false],
  source: [false, false, false, false, false, false, false],
  oilvolumn: [false, false, false],
  strength: [false, false, false],
};

function App() {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    fetch("http://localhost:3000/submit", {
      method: 'post',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body:JSON.stringify(formValues)
    })
  };

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: checked,
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
    <form onSubmit={handleSubmit}>
      <div className="box" style={sectionStyle}>
        <div className="left">
          <div className="leftpanel-1">
            <div>
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="item"
                        checked={formValues.item[0]}
                        onChange={(e) => handleMultiInput(e, "0", "4")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="采耳头疗【店铺招牌】      45分钟"
                  />
                </div>
                <p className="price">188元</p>
                <FormControl
                  sx={{ pr: 0, pt: 1, m: 0, minWidth: 5 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="itemQuantity"
                    value={formValues.itemQuantity[0]}
                    onChange={(e) => handleMultipleInputValue(e, "0", "item")}
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
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="item"
                        checked={formValues.item[1]}
                        onChange={(e) => handleMultiInput(e, "1", "4")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="精油SPA【精油舒压】      60分钟"
                  />
                </div>
                <p className="price">288元</p>
                <FormControl
                  sx={{ pr: 0, pt: 1, m: 0, minWidth: 5 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="itemQuantity"
                    value={formValues.itemQuantity[1]}
                    onChange={(e) => handleMultipleInputValue(e, "1", "item")}
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
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="item"
                        checked={formValues.item[2]}
                        onChange={(e) => handleMultiInput(e, "2", "4")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="肝胆排毒【熬夜必点】      90分钟"
                  />
                </div>
                <p className="price">488元</p>
                <FormControl
                  sx={{ pl: 0, pt: 1, m: 0, minWidth: 5 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="itemQuantity"
                    value={formValues.itemQuantity[2]}
                    onChange={(e) => handleMultipleInputValue(e, "2", "item")}
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
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="item"
                        checked={formValues.item[3]}
                        onChange={(e) => handleMultiInput(e, "3", "4")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="淋巴排毒【懒人必点】      90分钟"
                  />
                </div>
                <p className="price">488元</p>
                <FormControl
                  sx={{ pl: 0, pt: 1, m: 0, minWidth: 5, fontSize: 10 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="itemQuantity"
                    value={formValues.itemQuantity[3]}
                    onChange={(e) => handleMultipleInputValue(e, "3", "item")}
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
            </div>
          </div>

          <div className="leftpanel-2">
            <div>
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="feature"
                        checked={formValues.feature[0]}
                        onChange={(e) => handleMultiInput(e, "0")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="大阪樱花【店铺特色】      90分钟"
                  />
                </div>

                <p className="price">588元</p>
                <FormControl
                  sx={{ pl: 0, pt: 1, m: 0, minWidth: 5, fontSize: 10 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="featureQuantity"
                    value={formValues.featureQuantity[0]}
                    onChange={(e) => handleMultipleInputValue(e, "0", "feature")}
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
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="feature"
                        checked={formValues.feature[1]}
                        onChange={(e) => handleMultiInput(e, "1")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="富士山下【女神奢宠】      100分钟"
                  />
                </div>
                <p className="price">618元</p>
                <FormControl
                  sx={{ pl: 0, pt: 1, m: 0, minWidth: 5, fontSize: 10 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="featureQuantity"
                    value={formValues.featureQuantity[1]}
                    onChange={(e) => handleMultipleInputValue(e, "1", "feature")}
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
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="feature"
                        checked={formValues.feature[2]}
                        onChange={(e) => handleMultiInput(e, "2")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="京都礼遇【店铺爆款】      100分钟"
                  />
                </div>
                <p className="price">688元</p>
                <FormControl
                  sx={{ pl: 0, pt: 1, m: 0, minWidth: 5, fontSize: 10 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="featureQuantity"
                    value={formValues.featureQuantity[2]}
                    onChange={(e) => handleMultipleInputValue(e, "2", "feature")}
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
              <div className="rowDirection">
                <div className="item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="feature"
                        checked={formValues.feature[3]}
                        onChange={(e) => handleMultiInput(e, "3")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                      />
                    }
                    label="东京の热【男士尊享】      100分钟"
                  />
                </div>
                <p className="price">888元</p>
                <FormControl
                  sx={{ pl: 0, pt: 1, m: 0, minWidth: 5, fontSize: 10 }}
                  size="small"
                >
                  <InputLabel sx={{ fontSize: 10, pt: 1 }}>数量</InputLabel>
                  <Select
                    sx={{ fontSize: 10 }}
                    name="featureQuantity"
                    value={formValues.featureQuantity[3]}
                    onChange={(e) => handleMultipleInputValue(e, "3", "feature")}
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
            </div>
          </div>
          <div className="leftpanel-3">
            <div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oil1"
                      checked={formValues.oil1}
                      onChange={handleSingleInput}
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
                      name="oil2"
                      checked={formValues.oil2}
                      onChange={handleSingleInput}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="艾草生姜【植物芳疗】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oil3"
                      checked={formValues.oil3}
                      onChange={handleSingleInput}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="约会必备【魅力增强】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oil3"
                      checked={formValues.oil3}
                      onChange={handleSingleInput}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    />
                  }
                  label="玫瑰润养【温和滋润 舒缓紧致】"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oil3"
                      checked={formValues.oil3}
                      onChange={handleSingleInput}
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
                        name="oilvolumn"
                        checked={formValues.oilvolumn[0]}
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
                        name="oilvolumn"
                        checked={formValues.oilvolumn[1]}
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
                        name="oilvolumn"
                        checked={formValues.oilvolumn[2]}
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
          <div className="inner" style={{ paddingTop: "35px" }}>
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source1"
                  checked={formValues.source1}
                  onChange={handleInputChange}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                />
              }
              label="大众点评"
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source2"
                  checked={formValues.source2}
                  onChange={handleInputChange}
                  color="success"
                  sx={{
                    color: green[800],
                    "&.Mui-checked": {
                      color: pink[600],
                      fontSize: 25,
                    },
                  }}
                />
              }
              label="美团"
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source3"
                  checked={formValues.source3}
                  onChange={handleInputChange}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                />
              }
              label="小红书"
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source4"
                  checked={formValues.source4}
                  onChange={handleInputChange}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                />
              }
              label="抖音"
            />

            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source5"
                  checked={formValues.source5}
                  onChange={handleInputChange}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                />
              }
              label="会员"
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source6"
                  checked={formValues.source6}
                  onChange={handleInputChange}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                />
              }
              label="朋友介绍"
            />
            <FormControlLabel
              className="vertical"
              control={
                <Checkbox
                  name="source7"
                  checked={formValues.source7}
                  onChange={handleInputChange}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                />
              }
              label="其他"
            />
          </div>
          <div className="inner">
            <div style={{ paddingTop: "20px" }}> 充值优惠</div>
            <FormControlLabel
              control={
                <Checkbox
                  name="topup8000"
                  checked={formValues.topup8000}
                  onChange={handleSingleInput}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                />
              }
              label="充8000送4000"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="topup5000"
                  checked={formValues.topup5000}
                  onChange={handleSingleInput}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                />
              }
              label="充5000送2000"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="topup3000"
                  checked={formValues.topup3000}
                  onChange={handleSingleInput}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                />
              }
              label="充3000送1000"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="必填"
              defaultValue="预定手机号"
            />
            <TextField
              required
              id="outlined-required"
              defaultValue="客户姓名"
            />
            <TextField required id="outlined-required" defaultValue="理疗师" />
            <div style={{ textAlign: "right", paddingTop: "10px" }}>
              <Button variant="contained" color="primary" type="submit">
                提交
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
