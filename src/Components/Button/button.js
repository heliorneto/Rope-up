import React from 'react';
import './button.css';

/*
This component takes the following props:
- clickAction: The action after a click event
- label: The text of the button
*/

function Button(props){
    return (
        <button
        className={"RoundButton " + props.customStyleClass} 
        onClick={()=>props.clickAction()}
        >
            {props.label}
        </button>
    );
}

export default Button;