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
            />
            <span 
            className='logo-text' 
            style={
                {
                    color: props.color,
                    fontSize: props.fontSize + "px"
                }
            }>ropeup</span>
        </div>
    );
}

export default Logo;