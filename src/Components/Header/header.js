import {React, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import "./header.css";

/*
This component takes a prop named "selectedPage" that should be set to the 
name of the current page (on lowercase). By setting it, the current page
link will receive a different colour in the Header.
*/

function Header(props){
    let history = useHistory();
    const [shrink, setShrink] = useState(false);

    const shrinkHeader = ()=>{
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            setShrink(true);
        }else{
            setShrink(false);
        }
    }

    useEffect(()=>{window.addEventListener('scroll',shrinkHeader)},[]);
    useEffect(()=>{return window.removeEventListener('scroll',shrinkHeader)},[]);

    return(
        <nav id="header" className={shrink? 'small': ''}>
            <div id="logo" onClick={()=>{history.push("/home")}}>
                {
                    shrink? <Logo width="80" height="80" color="#000" fontSize="28"/>:
                    <Logo width="120" height="120" color="#000" fontSize="30"/>
                }
            </div>
            <ul id="options">
                <li id="comoFunciona">
                    <a href='/home#link'>Como Funciona</a>
                </li>
                <li id="blog">
                    <a href='/blog' style={(props.selectedPage === "blog")? {color: "#023B59"}: {}}>Blog</a>
                </li>
                <li id="sobre">
                    <a href='/sobre' style={(props.selectedPage === "sobre")? {color: "#023B59"}: {}}>Sobre</a>
                </li>
                <li id="login">
                    <a href='/login' style={(props.selectedPage === "login")? {color: "#023B59"}: {}}><b>Login</b></a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;