
import './App.css';
import React, { useState } from 'react';

// import About from './Components/About';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  //type indicates color => danger: red
  const showAlert = (message, type) =>{ 
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleTheme = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2c2c2c';
      document.body.style.color='white';
      showAlert("Dark Mode enabled", "success");
      // document.title="TextUtils - Dark Mode";




      // setInterval(() => {
      //   document.title="TextUtils is amazing";
      // },2000)
      // setInterval(() => {
      //   document.title="Install TextUtils now";
      // },1500)

      
    }



    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Dark Mode disabled", "success");
      // document.title="TextUtils - Light Mode";
    }

  }

  return (
    <>
    <Navbar tittle="TextUtils" aboutText="AboutText" mode={mode} toggleTheme={toggleTheme} />
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode} />
      {/* <About mode={mode}/> */}
    </div>   

    {/* ^^without react router DOM */}

    {/* <BrowserRouter>
    <Navbar tittle="TextUtils" aboutText="AboutText" mode={mode} toggleTheme={toggleTheme} />
    <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode} />} />
          
        </Routes>
      </div>
    </BrowserRouter> */}


    {/* React follows partial matching which is why 'exact path' is used */}

    
    </>
  );
}

export default App;
