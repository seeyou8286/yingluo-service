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
  item1: false,
  item2: false,
  item3: false,
  featurn1: false,
  featurn2: false,
  featurn3: false
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

  const handleSingleInput = (e) => {
    const { name, checked } = e.target;
    formValues.featurn1=false;
    formValues.featurn2=false;
    formValues.featurn3=false;
    // setFormValues(formValues.featurn1,false);
    // setFormValues(formValues.featurn2,false)
    // setFormValues(formValues.featurn3,false)
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };
  


  return (
    <form onSubmit={handleSubmit}>
      <div className="box" style={sectionStyle}>
        <div className="left">
          <div className="workingArea">
            <div className="padding">
                <FormControlLabel
                  control={
                    <Checkbox name="item1" checked={formValues.item1} onChange={handleInputChange} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="item2"  checked={formValues.item2} onChange={handleInputChange} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="item3"  checked={formValues.item3} onChange={handleInputChange} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
            </div>
          </div>
          <div className="workingArea">
            <div>
                <FormControlLabel
                  control={
                    <Checkbox name="feature1" checked={formValues.featurn1} onChange={handleSingleInput} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="feature2"  checked={formValues.feature2} onChange={handleSingleInput} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="feature3"  checked={formValues.feature3} onChange={handleSingleInput} sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }} />
                  }
                  label="大阪樱花【店铺特色】      90分钟       588元"
                />
            </div>
          </div>
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
