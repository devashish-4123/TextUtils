import React, {useState} from "react";


export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let upstate = text.toUpperCase();
    setText(upstate);
    props.showAlert("All characters are converted to Uppercase ","success");
  }

  const handleLwClick = () => {
    let lowstate = text.toLowerCase();
    setText(lowstate);
    props.showAlert("All characters are converted to Lowercase ","success");
  }

  const handleClear = () =>{
    console.log("clear text");
    let cleartext = ""
    setText(cleartext)
    props.showAlert("Do you really want to clear the text","Warning");
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value) // for typing the text in the text box
    
  }

  const handleCopy =() => {
    console.log("copy text")
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text is copied","success");
  }

  const [text, setText] = useState("Enter Your Text Here");
  return (

    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#7A7A7A':'white' , color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn-primary " onClick={handleUpClick}>Convert To Uppercase</button> 
      <button className="btn-primary mx-2" onClick={handleLwClick}>Convert To Lowercase</button> {/*mx- 2 is used for spacing between the buttons */}
      <button className="btn-primary mx-2" onClick={handleCopy}>Copy</button>
      <button className="btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    </div>

    <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black' }}>   {/*my-4 is used for margin */}
      <h3>Your Text Summary</h3>
      <p>Total Number of Words {text.split(" ").length}</p>
      <p>Total Number of Characters {text.length}</p>
      <p> Average time to read {0.08*text.split(" ").length} minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

