import React from 'react';
import './textBox.css';

/*
This component takes the following props:
- color: The background color of the textBox
*/

function TextBox(props){
    return (
        <div 
        className="textBox" 
        style={{backgroundColor: props.color}}
        >
            {props.children}
        </div>
    );
}

export default TextBox;