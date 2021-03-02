import React from 'react';
import './textBox.css';
import Button2 from '../Button2/button2'

/*
This component takes the following props:
- color: The background color of the textBox
*/

function TextBox(props){
    return (
        <div 
        className="textBox" 
        style={{backgroundColor: props.color, fontSize: 32}}
        >
            <h3 style={{padding: "5vh"}}>Assine nossa newsletter e fique por dentro de conteúdos de gestão e tecnologia</h3>
            <div id="button-text-box">
                <Button2 width="200px" color="White" label="Veja todos os assuntos"></Button2>
            </div>
        </div>
    );
}

export default TextBox;