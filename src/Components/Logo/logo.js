import React from 'react';
import {ReactComponent as LogoImage} from './logo-ropeup.svg';
import './logo.css';    

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
            }>rope up</span>
        </div>
    );
}

export default Logo;