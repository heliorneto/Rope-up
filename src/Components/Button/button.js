import React from 'react';
import './button.css';

/*
This component takes the following props:
- clickAction: a function to be executed after a click on the button
- backgroundColor: the color for the button's background
- text: the text to be shown in the button
- textColor: the color of the button's text (CSS colors)
- width: the width of the button
- height: the height of the button
*/

function Button(props){
    return (
        <button
        className="red-button" 
        onClick={()=>props.clickAction()}
        style={{width: props.width, height: props.height, color: props.textColor, backgroundColor: props.backgroundColor}}
        >
            {props.text}
        </button>
    );
}

export default Button;