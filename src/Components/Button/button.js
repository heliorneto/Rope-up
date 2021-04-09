import React from 'react';
import './button.css';

/*
This component takes the following props:
- clickAction: The action after a click event
- label: The text of the button
- color: The background color of the textBox
- color2: the color of the button text
- width: The width of the button
*/

function Button(props){
    return (
        <button
        className="red-button" 
        onClick={()=>props.clickAction()}
        style={{backgroundColor: props.color, color: props.color2 , width: props.width}}
        >
            {props.label}
        </button>
    );
}

export default Button;