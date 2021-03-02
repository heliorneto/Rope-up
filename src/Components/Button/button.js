import React from 'react';
import './button.css';

/*
This component takes the following props:
- clickAction: The action after a click event
- label: The text of the button
- color: The background color of the textBox
- width: The width of the button
*/

function Button(props){
    return (
        <button
        className="red-button" 
        onClick={()=>props.clickAction()}
        style={{backgroundColor: props.color,width: props.width}}
        >
            {props.label}
        </button>
    );
}

export default Button;