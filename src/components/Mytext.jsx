import React,{useState} from 'react'

export default function Mytext(props) {
    const [text,setText]=useState("sahil's text");
    const handle =()=>{
        let dero=text.toUpperCase();
        setText(dero);
        console.log("typo")
    }

    const changetext=(event)=>{
        console.log("clicked");
        setText(event.target.value);
    }
  return (
<div className="mb-3">
    <h1>{props.Title}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={changetext}></textarea>
  <button className="btn btn-primary" onClick={handle}>Convert Your Text</button>
</div>
    
    
  )
}
