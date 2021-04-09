import React from 'react';
import './textBox.css';
import Button from '../Button/button'

/*
This component takes the following props:
- color: A string with the background color of the textBox (CSS colors)
- text: A string with the text to show inside the text box
- btnAction: A function to be executed by the textBox's button
*/

function TextBox(props){
    return (
        <div 
        className="textBox" 
        style={{backgroundColor: props.color}}
        >
            <h3 style={{padding: "40px", textAlign: 'center'}}>{props.text}</h3>
            <div id="button-text-box">
                <Button 
                clickAction={props.btnAction}
                text="Receber conteúdos exclusivos" 
                width="200px" 
                height="65px"
                backgroundColor="White" 
                textColor="#023B59" 
                />
            </div>
        </div>
    );
}

export default TextBox;