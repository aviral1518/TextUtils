import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text?.toUpperCase());
    props?.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text?.toLowerCase());
    props?.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event?.target?.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props?.showAlert("Extra Spaces removed!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props?.showAlert("Copied to clipboard!", "success");
  };
  return (
    <>
      <div
        className="container my-2"
        style={{ color: props?.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props?.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props?.mode === "dark" ? "#13466e" : "white",
              color: props?.mode === "dark" ? "white" : "#042743",
            }}
          />
        </div>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy to clipboard
        </button>
        <button
          disabled={text?.length === 0}
          className="btn btn-primary my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props?.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text?.split(" ")?.filter((i) => i?.length !== 0)?.length} words and{" "}
          {text?.length} characters
        </p>
        <p>
          {0.008 * text?.split(" ")?.filter((i) => i?.length !== 0)?.length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text?.length > 0
            ? text
            : "Nothing to Preview!"}
        </p>
      </div>
    </>
  );
}
