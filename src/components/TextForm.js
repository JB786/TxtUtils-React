import React, { useState } from 'react'

// Hook allows you to use state and other react features with a function-based component,  that is without writing a class.

// useState is type of the "Hooks" in react

// useState take 2 parameters in the form of destructuring assignment [count, setCount].
// count is the variable and setCount is the function to change the value of count variable.

// count = 4; // this is wrong way to change count
// setCount(4); // this is the correct way and won't throw an error.
// Whatever we write in useState(0) becomes default value of count. 

// in this case we use [text,setText] instead of [count,setCount].

// we need to use onChange event in textarea otherwise we won't able to update text variable through input.value

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleNoClick = () => {
        let newText = "";
        let element = document.getElementById("mytext");
        element.select();
        setText(newText);
    }
    
    const handleCopyClick = () => {
        let element = document.getElementById("mytext");
        let alert = document.querySelector(".alert");
        element.select();
        //element.setSelectionRange(0,99999); // for mobile devices
        navigator.clipboard.writeText(element.value);
        alert.hidden = (false);
        setTimeout(()=>{
            alert.hidden = (true);
        },3000);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/g);
        setText(newText.join(" "));
    }

    const handleOnType = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white":"black"}}>
                <div className="alert alert-success" role="alert" hidden={true}>
                    Text Copied to Clipboard Successfully.
                </div>
                <div className="mb-3">
                    <label htmlFor="mytext" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnType} id="mytext" placeholder='Write Anything Here' rows="8" style={{backgroundColor: props.mode === "dark" ? "#afa8a8":"white", color: props.mode === "dark" ? "white":"black"}}></textarea>
                </div>
                <button className={`btn btn-${props.mode === "dark" ? "info": "primary"} mx-1`} onClick={handleUpClick}>To UpperCase</button>
                <button className={`btn btn-${props.mode === "dark" ? "info": "primary"} mx-1`} onClick={handleLowClick}>To LowerCase</button>
                <button className={`btn btn-${props.mode === "dark" ? "info": "primary"} mx-1`} onClick={handleNoClick}>Clear All</button>
                <button className={`btn btn-${props.mode === "dark" ? "info": "primary"} mx-1`} onClick={handleCopyClick}>Copy to Clipboard</button>
                <button className={`btn btn-${props.mode === "dark" ? "info": "primary"} mx-1`} onClick={handleExtraSpaces}>Remove Extra-Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white":"black"}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                {/* .split(" ") string method split the words with a space and return an array*/}
                <p>Take {0.008 * text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "Write Something Above for the Preview."}</p>
            </div>
        </>
    )
}