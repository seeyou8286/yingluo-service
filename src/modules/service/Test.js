import "../../App.css";
import React, { useState } from "react";
import ServiceOrderPic from "../../assets/service-clean.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

var sectionStyle = {
  backgroundImage: `url(${ServiceOrderPic})`,
};

const defaultValues = {
  items: [false,true,false]
};

function App() {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="box" style={sectionStyle}>
        <div className="left">
          <div className="workingArea">
            <div className="padding">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={formValues.items[0]} onChange={handleInputChange} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={formValues.items[1]} onChange={handleInputChange} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={formValues.items[2]} onChange={handleInputChange} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
              </FormGroup>
            </div>
          </div>
          <div className="inner"></div>
          <div className="inner"></div>
        </div>
        <div className="right">
          <div className="inner"></div>
          <div className="inner"></div>
          <div className="inner"></div>
        </div>
      </div>
      <div style={{textAlign: 'right' }}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default App;
