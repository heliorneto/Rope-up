import React from 'react';
import './textBox.css';
import Button from '../Button/button'

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
            <h3 style={{padding: "5vh", textAlign: 'center'}}>Assine nossa newsletter e fique por dentro de conteúdos de gestão e tecnologia</h3>
            <div id="button-text-box">
                <Button width="200px" color="White" color2="black" label="Receber conteúdos exclusivos"></Button>
            </div>
        </div>
    );
}

export default TextBox;