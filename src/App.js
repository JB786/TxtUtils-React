// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


//let b = "<strong>ASS-HOLES!</strong>" // JSX sanitizes the external HTML code if we try to add that external html code through JavaScript variable.
export default function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setModeText("Disable Dark Mode")
      document.body.style.backgroundColor = "#0a0720";
      showAlert("Dark Mode Enabled!", "success")
    }
    else {
      setMode("light")
      setModeText("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled!", "success")
    }
  }

  return (
    // <>...</> this is called JSX-Fragment.
    <>
      <BrowserRouter>
        <Navbar title="TxtUtils.io" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        {/* React-Router-dom code */}
        <Routes>
          <Route exact path="/" element={<TextForm heading="Try TxtUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        {/* React-Router-dom code */}
      </BrowserRouter >
    </>
  );
}

// Now if we want a functionality to change our title anytime we want to then we do that by passing title as a props (properties) in <Navbar/>. After that we can access those props in our Navbar function JSX in Navbar.js by passing props as a parameter to Navbar function. Then we can access those props anywhere in Navbar.js JSX by writing {props.prop_name}


// react-router-dom help in navigation of tabs on navbar without reloading the entire webpage again and again.

// We use "exact" keyword in <Route path> above because if we try to render "/users/home" as component-2 it will render "/users" which is component-1 even if we want to render component-2 that's why we use exact.

// in React-router-dom instead of using <a href=""> we use <link to="">

//Now we deploy this website on GitHub pages for that go to 