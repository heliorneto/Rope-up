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
    const isPhone = window.matchMedia("(max-width: 600px)").matches;
    const scrollOffset = (isPhone)? 10: 50;
    let history = useHistory();
    const [shrink, setShrink] = useState(false);

    useEffect(()=>{
    
        const shrinkHeader = ()=>{
            if(document.body.scrollTop > scrollOffset || document.documentElement.scrollTop > scrollOffset){
                setShrink(true);
            }else{
                setShrink(false);
            }
        }

        window.addEventListener('scroll',shrinkHeader);
        return ()=>{window.removeEventListener('scroll',shrinkHeader);};
    },[scrollOffset]);

    if(!isPhone){
        return(
            <nav id="header" className={shrink? 'small': ''}>
                <div id="logo" onClick={()=>{history.push("/home")}}>
                    {
                        (shrink)? <Logo width="80" height="80" color="#000" fontSize="28"/>:
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
    }else{
        return (
            <nav id="header" className={shrink? 'small': ''}>
                <div id="logo" onClick={()=>{history.push("/home")}}>
                    <Logo width="80" height="80" color="#000" fontSize="28"/>
                </div>
                <button id="menu-icon"/>
            </nav>
        );
    }
}

export default Header;