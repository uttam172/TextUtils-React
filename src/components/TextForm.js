import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","info");
    }
    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","info");
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been Cleared","warning");
    }
    const handleCopy = () => {
        const text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been Removed","secondary");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // const handlePaste = () => {
    //     // const ptext = document.getElementById('mybox').value;
    //     const ptext = navigator.clipboard.readText();
    //     document.getElementById("mybox").value += " " + ptext;
    // }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Type below</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUp}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                {/*<button className="btn btn-primary mx-3" onClick={handlePaste}>Paste Text</button>*/}
                <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words <br />{text.length} Characters</p>
                <p>It takes {0.008 * text.split(" ").length} minutes to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
