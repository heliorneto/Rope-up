import React from 'react';
import {ReactComponent as LogoImage} from './logo-ropeup.svg';
import './logo.css';    


/*
This component takes the following props:
- color: The color of the "LogoImage" and logo text
- width: The width of the "LogoImage"
- height: The height of the "LogoImage"
- fontSize: The font size of the logo text
*/


function Logo(props){
    return (
        <div className='logo-container'>
            <LogoImage 
            fill={props.color}
            width={props.width}
            height={props.height}
            style={{transition: "width 0.4s cubic-bezier(.79,.14,.15,.86), height 0.4s cubic-bezier(.79,.14,.15,.86)"}}
            />
            <span 
            className='logo-text' 
            style={
                {
                    color: props.color,
                    fontSize: props.fontSize + "px",
                    transition: "font-size 0.4s cubic-bezier(.79,.14,.15,.86)"
                }
            }>ropeup</span>
        </div>
    );
}

export default Logo;