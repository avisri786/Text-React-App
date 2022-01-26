import React, { useState } from 'react'


export default function Textform(props) {
  const [text, setText] = useState('');
  let css;
  if (props.mode === 'light') {
    css = {
      color: 'black',
      background: 'white'
    };
  }
  else {
    css = {
      color: 'white',
      background: 'black'
    }
  }
  function clickuphandler() {
    
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert('success','Converted to Upper Case');
  }
  function clickdownhandler() {
    
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert('success','Converted to Lower Case');
  }
  function onchangehandler(event) {
    console.log('change occured')
    setText(event.target.value);
  }
  function clickcopyhandler(){
    let textarea=document.getElementById('mybox').value;
    navigator.clipboard.writeText(textarea);
    props.showalert('success','Copied to Clipboard');
  }
  return (
    <div className='container' style={css}>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" style={css} onChange={onchangehandler} id="mybox" rows="8" value={text}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" type="submit" onClick={clickuphandler}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" type="submit" onClick={clickdownhandler}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" type="submit" onClick={clickcopyhandler}>Copy</button>
      <hr />
      <div className="container my-3" style={css}>
        <h2>Your text Summary</h2>
        <p>Above text has {text.split(' ').filter((element) =>{return element.length!==0}).length} words and {text.length} character</p>
        <p>User will take approx {0.008 * text.split(' ').filter((element) =>{return element.length!==0}).length} minutes</p>
        <hr />
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

