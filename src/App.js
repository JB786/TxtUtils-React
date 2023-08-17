// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

//let b = "<strong>ASS-HOLES!</strong>" // JSX sanitizes the external HTML code if we try to add that external html code through JavaScript variable.
export default function App() {

const [mode, setMode] = useState("light");
const [modeText, setModeText] = useState("Toggle Dark Mode")

const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark")
    setModeText("Toggle Light Mode")
    document.body.style.backgroundColor = "#0a0720";
  }
  else{
    setMode("light")
    setModeText("Toggle Dark Mode")
    document.body.style.backgroundColor = "white";
  }
}

  return (
    // <>...</> this is called JSX-Fragment.
    <>
      <Navbar title="TxtUtils.co" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <TextForm heading="Enter Your Text Below" mode={mode} />
      {/* <About/> */}
    </>
  );
}

// Now if we want a functionality to change our title anytime we want to then we do that by passing title as a props (properties) in <Navbar/>. After that we can access those props in our Navbar function JSX in Navbar.js by passing props as a parameter to Navbar function. Then we can access those props anywhere in Navbar.js JSX by writing {props.prop_name}


