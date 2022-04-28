import React,{useState} from 'react'

export default function Mytext(props) {
    const [text,setText]=useState("sahil's text");
    const handle =()=>{
        let dero=text.toUpperCase();
        setText(dero);
        console.log("typo")
    }
    const handlecheck =()=>{
        let dero=text.toLowerCase();
        setText(dero);
        console.log("typo")
    }


    const changetext=(event)=>{
        console.log("clicked");
        setText(event.target.value);
    }
  return (
      <>
<div className="mb-3">
    <h1>{props.Title}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={changetext}></textarea>
  <button className="btn btn-primary mx-3" onClick={handle}>Convert Your Text</button>
  <button className="btn btn-primary mx-3" onClick={handlecheck}>Convert Yourto lower</button>
</div>
<h2>Text😍summary :</h2>
<div className='texti-main'>
    <div className='texti'>
         <h4>Words : <span className='number'>{text.split(" ").length}</span></h4> 
    </div>
    <h2 className='imo'>💁</h2> 
    <div className='texti1'>
         <h4>Charcters : <span className='number'>{text.length}</span></h4> 
    </div>
    </div>
    <div>
        <h2 className='timi'>Time⌚Taken :</h2>
        <div className='temer'>
        <h4>{0.008* text.split(" ").length}:Min</h4>
        </div>
        <h2 className='timi'>preview 😄:</h2>
        <div className='box' >
        <h3>{text}</h3>
        </div>
    </div>
    </>
  )
}
