import React from 'react';
import './textBox.css';
import Button from '../Button/button'

/*
This component takes the following props:
- color: A string with the background color of the textBox (CSS colors)
- text: A string with the text to show inside the text box
*/

function TextBox(props){
    return (
        <div 
        className="textBox" 
        style={{backgroundColor: props.color}}
        >
            <h3 style={{padding: "40px", textAlign: 'center'}}>{props.text}</h3>
            <div id="button-text-box">
                <Button width="200px" color="White" color2="#023B59" label="Receber conteúdos exclusivos"/>
            </div>
        </div>
    );
}

export default TextBox;