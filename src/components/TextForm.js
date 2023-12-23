// import { useState } from "react"
import React, {useState}from 'react'

export default function TextForm(props) {
    // let newText = "null"
    // let savedText = 'null'
    const handleupclick = ()=>{
        // console.log("Uppercase was Clicked")
        let newText = Text.toUpperCase()
        setText(newText)
    }
    const handleloclick = ()=>{
        let newText = Text.toLowerCase()
        setText(newText)
    }
    const handleclearclick = ()=>{
        let newText = ' '
        setText(newText)
    }
    const handlecopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleextra = ()=>{
        let newtext = Text.split(/[ ]+/)
        setText(newtext.join(" "))
    }
    const handlesaveclick = (event)=>{
        // let newText = Text.toLowerCase
        // savedText(event.target.value)
        savedText(Text)
        
        // setText(newText)
    }
    const countWords = (str) => {
        let words;
        if (Text === "") {
    
          words = 0;
        } else {
          words = str.trim().split(/\s+/).length;
        }
        return words;
      };
    
    const handleOneChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
      }
    const [Text,setText]=useState("Enter a text !!")
    const [unText,savedText]=useState("Save your Text")
  return (
    <>
<div className="container my-4"style={{color: props.mode ==='dark'?'white':'black'}} >
<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
<input type="email" className="form-control" id="example" placeholder="name@example.com"/>
</div>
<div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
<h6>{props.heading}</h6>
<div className="mb-3">
<textarea className="form-control" value = {Text} onChange= {handleOneChange} style={{backgroundColor : props.mode ==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleupclick}>Convert to Uppercase </button>
<button className='btn btn-primary mx-2' onClick={handleloclick}>Convert to Lowercase </button>
<button className='btn btn-primary mx-2' onClick={handleclearclick}>Clear Text </button>
<button className='btn btn-primary mx-2' onClick={handlesaveclick}>Save </button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Read</button>
<button className='btn btn-primary mx-2' onClick={handlecopy}>Copy Text </button>
<button className='btn btn-primary mx-2' onClick={handleextra}>Remove Extra Spaces </button>

</div>
<div className='container my-3'>
    <h5>Your text Summary :</h5>
    {/* <p> Words : {Text.split(" ").length} Characters : {Text.length}</p> */}
    <p> Words : {countWords(Text)} Characters : {Text.length}</p>
    <p>Minutes : {0.008*Text.split(" ").length}</p>
</div>
<div className="container">
<h5>Saved text : </h5>
<div className="mb-3">
<textarea className="form-control" value = {unText} id="exampleFormControlTextarea1" rows="3"></textarea>
</div></div>
</>  
  )
}
