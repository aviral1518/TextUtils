import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text?.toUpperCase());
        props?.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        setText(text?.toLowerCase());
        props?.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event?.target?.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props?.showAlert("Extra Spaces removed!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props?.showAlert("Copied to clipboard!", "success");
    }
  return (
    <>
    <div className="container" style={{color: props?.mode === 'dark'? 'white' : '#042743'}}>
      <h1>{props?.heading}</h1>
      <div className="mb-3">
        <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
                backgroundColor: props?.mode === 'dark'? 'grey' : 'white',
                color: props?.mode === 'dark'? 'white' : '#042743'
            }}
        />
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-4" style={{color: props?.mode === 'dark'? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ")?.length} words and {text?.length} characters</p>
        <p>{0.008 * text.split(" ")?.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text?.length > 0 ? text:'Enter something in the text box above to preview it here.'}</p>
    </div>
    </>
  );
}
