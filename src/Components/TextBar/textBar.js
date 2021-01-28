import React from 'react';
import './textBar.css'

/*
This component takes the following props:
- placeholder: The text present in the text box
- width: The width of the text box
*/



function TextBar(props){
    return(
            <input type="search" id="search" placeholder={props.placeholder} style={{width:props.width}} ></input>
    );


}
export default TextBar;