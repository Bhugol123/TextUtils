import React,{useState} from 'react'


export default function TextForm({heading, mode, showAlert}){
 const [text, setText] = useState('');

const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    showAlert('Converted to upper case', 'success')
};
const handleLowerClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    showAlert('Converted to lower case', 'success')
};
const handleClearClick =()=>{
  let newText = '';
  setText(newText);
  showAlert('Text has been cleard', 'success')
}
const handleExtraSpace =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(' '));
  showAlert('Extra space has been removed', 'success')
}

 const handleOnChange = (e)=>{
 setText(e.target.value)
 };
  return (
    <>
    <div style={{color: mode==='dark'? 'white': '#042743'}}>

    <div className='container' >
        <div className="mb-3">
        <h2>{heading} below</h2>
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: mode==='dark'? 'gray': 'white', color: mode==='dark'? 'white': '#042743' }} value={text} id="myBox" rows="8"></textarea>
         </div>
          <button className='btn btn-primary mx-3 ' onClick={handleUpClick}>Convert to uppercase</button>
          <button className='btn btn-primary mx-3' onClick={handleLowerClick}>Convert to lowercase</button>
          <button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear text</button>
          <button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear text</button>
          <button className='btn btn-primary mx-3' onClick={handleExtraSpace}>Clear space</button>
    </div>

    <div className="container my-3">
        <h3>Text you have enter.</h3>
        <p>{text.split(' ').length - 1} words, {text.length} charcters</p>
        <p>{0.008 * text.split(' ').length} minutes is required to read {text.split(' ').length } words.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter somethings in the box to preview'}</p>
    </div>
    </div>
   
    </>
  )
}
