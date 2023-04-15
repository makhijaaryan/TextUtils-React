import React, {useState} from 'react'

//useState is used when states are used in React component
//useState is one of the React Hooks

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('UpperCase Was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","primary");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","primary");
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","primary");
    }

    const handleOnChange = (event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    
    
    const [text, setText] = useState('');
    //initialising State


    // setText='lololoo';   gives error
    // setText='lololoo';   proper method to assign value to a React Hook
    return (
        <>
        
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" 
                style={{backgroundColor: props.mode === 'dark'?'grey':'white', 
                color: props.mode === 'dark'?'white':'black'}}></textarea>
                {/* 2 {} have been used in the above line, 1st for js 2nd one to call an obj (like backgroundColor) in it */}
            </div>
            <botton className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Covert to UpperCase</botton>
            <botton className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Covert to LowerCase</botton>
            <botton className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</botton>
        </div>
        
        <div className="container my-3">
            <h2>Text summmary: </h2>
            <p>Words: {text.split(' ').filter((element)=>{return element.length!==0}).length} <br/> Characters :{text.length} </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the textbox above"}</p>
        </div>
        
        </>
    )
}
