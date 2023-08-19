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
        props.showAlert("Converted to UpperCase Characters!","success")
    }
    
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase Characters!","success")
    }
    
    const handleNoClick = () => {
        let newText = "";
        let element = document.getElementById("mytext");
        element.select();
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }
    
    const handleCopyClick = () => {
        let element = document.getElementById("mytext");
        //element.select();
        //element.setSelectionRange(0,99999); // for mobile devices
        navigator.clipboard.writeText(element.value);
        //document.getSelection().removeAllRanges(); // this line will remove .select() after copying text.
        props.showAlert("Copied to Clipboard!","success")
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/g);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success")
    }

    const handleOnType = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div className="mb-3">
                    <label htmlFor="mytext" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnType} id="mytext" placeholder='Write Anything Here' rows="8" style={{ backgroundColor: props.mode === "dark" ? "rgb(112 112 102)" : "white", color: props.mode === "dark" ? "rgb(224, 241, 6)" : "black" }}></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "info" : "primary"} mx-1 my-1`} onClick={handleUpClick}>To UpperCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "info" : "primary"} mx-1 my-1`} onClick={handleLowClick}>To LowerCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "info" : "primary"} mx-1 my-1`} onClick={handleNoClick}>Clear All</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "info" : "primary"} mx-1 my-1`} onClick={handleCopyClick}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "info" : "primary"} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra-Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.</p>
                {/* .split(" ") string method split the words with a space and return an array. Then filter is used to remove that space element from the returned array so that it won't show word whenever space is typed.*/}
                <p>Take {0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}