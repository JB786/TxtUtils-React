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
        navigator.clipboard.writeText(element.value);
        alert.hidden = false;
        setTimeout(()=>{
            alert.hidden = true;
        },3000);
    }

    const handleOnType = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <div class="alert alert-success" role="alert" hidden="true">
                    Text Copied to Clipboard Successfully.
                </div>
                <div className="mb-3">
                    <label htmlFor="mytext" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnType} id="mytext" placeholder='Write Anything Here' rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleNoClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                {/* .split(" ") string method split the words with a space and return an array*/}
                <p>Take {0.008 * text.split(" ").length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}