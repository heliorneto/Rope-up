import React from 'react';
import {ReactComponent as LogoImage} from './logo-ropeup.svg';
import './logo.css';    

function Logo(props){
    return (
        <div className='logo-container'>
            <LogoImage className='logo-image' fill={props.color}/>
            <span className='logo-text' style={{color: props.color}}>rope up</span>
        </div>
    );
}

export default Logo;