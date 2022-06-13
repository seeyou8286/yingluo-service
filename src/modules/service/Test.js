import "../../App.css";
import React, { useState } from "react";
import ServiceOrderPic from "../../assets/service-2.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { pink, green } from "@mui/material/colors";

var sectionStyle = {
  backgroundImage: `url(${ServiceOrderPic})`,
};

const defaultValues = {
  item: [false,false,false],
  feature:[false,false,false],
  oiltype:[false,false,false],
  topup:[false,false,false],
  source:[false,false,false,false,false,false,false],
  oilvolumn:[false,false,false],
  strength: [false, false, false],
};

function App() {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };


  const handleSingleInput = (e, index, size) => {
    const { name, checked } = e.target;
    console.log(index);
    console.log(formValues[name]);
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
              <FormControlLabel
                control={
                  <Checkbox
                    name="item"
                    checked={formValues.item[0]}
                    onChange={handleInputChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                }
                label="大阪樱花【店铺特色】      90分钟       588元"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="item2"
                    checked={formValues.item2}
                    onChange={handleInputChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                }
                label="大阪樱花【店铺特色】      90分钟       588元"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="item3"
                    checked={formValues.item3}
                    onChange={handleInputChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                }
                label="大阪樱花【店铺特色】      90分钟       588元"
              />
            </div>
          </div>
          <div className="leftpanel-2">
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    name="feature1"
                    checked={formValues.feature1}
                    onChange={handleInputChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                }
                label="富士山下【店铺特色】      90分钟       588元"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="feature2"
                    checked={formValues.feature2}
                    onChange={handleInputChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                }
                label="富士山下【店铺特色】      90分钟       588元"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="feature3"
                    checked={formValues.feature3}
                    onChange={handleInputChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                }
                label="富士山下【店铺特色】      90分钟       588元"
              />
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
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                    />
                  }
                  label="精油1      90分钟       588元"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oil2"
                      checked={formValues.oil2}
                      onChange={handleSingleInput}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                    />
                  }
                  label="精油3      90分钟       588元"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="oil3"
                      checked={formValues.oil3}
                      onChange={handleSingleInput}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                    />
                  }
                  label="精油3      90分钟       588元"
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
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
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
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
