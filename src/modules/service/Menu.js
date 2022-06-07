import '../../App.css';
import React from 'react';
import ServiceOrderPic from '../../assets/service-clean.jpeg'; 

var sectionStyle = {
  backgroundImage: `url(${ServiceOrderPic})`,
};

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div style={sectionStyle}>

        </div>
        <img src={ServiceOrderPic} />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
      </div>
    </div>
  );
}

export default App;
