import {React, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import {useMedia} from "./../../hooks/media_queries";
import "./header.css";

/*
This component takes a prop named "selectedPage" that should be set to the 
name of the current page (on lowercase). By setting it, the current page
link will receive a different colour in the Header.
*/

function Header(props){
    let history = useHistory();
    const [shrink, setShrink] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { isSmallPhone, isPhone, isTablet } = useMedia();
    const scrollOffset = (isPhone || isSmallPhone)? 10: 50;

    useEffect(()=>{
        const shrinkHeader = ()=>{
            if(document.body.scrollTop > scrollOffset || document.documentElement.scrollTop > scrollOffset){
                setShrink(true);
            }else{
                setShrink(false);
            }
        }

        window.addEventListener('scroll',shrinkHeader);
        return ()=>{
            window.removeEventListener('scroll',shrinkHeader);
        };
    },[scrollOffset]);

    if(!(isSmallPhone || isPhone)){
        return(
            <div id="header-container">
                <header id="header" className={shrink? 'small': ''}>
                    <div id="logo" onClick={()=>{history.push("/home")}}>
                        {
                            (isTablet)? 
                            ((shrink)? <Logo width="80" height="80" color="#000" fontSize="26"/>:
                            <Logo width="100" height="100" color="#000" fontSize="28"/>):
                            ((shrink)? <Logo width="80" height="80" color="#000" fontSize="28"/>:
                            <Logo width="120" height="120" color="#000" fontSize="30"/>)
                        }
                    </div>
                    <nav>
                        <ul id="options">
                            <li id="comoFunciona">
                                <a href='/home#link'>Solução</a>
                            </li>
                            <li id="blog">
                                <a href='/blog' style={(props.selectedPage === "blog")? {color: "#023B59"}: {}}>Blog</a>
                            </li>
                            <li id="sobre">
                                <a href='/sobre' style={(props.selectedPage === "sobre")? {color: "#023B59"}: {}}>Sobre</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }else{
        return (
            <div id="header-container" className={expanded? "expanded": ""}>
                <header id="header" className={(shrink || expanded)? 'small': ''}>
                    <div id="logo" onClick={()=>{history.push("/home")}}>
                        <Logo width="80" height="80" color="#000" fontSize="26"/>
                    </div>
                    <button id="menu-icon" onClick={()=>{setExpanded(!expanded)}}/>
                </header>
                <nav id="menu-options">
                    <ul className={(expanded)? "show": "hide"}>
                        <li id="comoFunciona">
                            <a href='/home#link'>Solução</a>
                        </li>
                        <li id="blog">
                            <a href='/blog' style={(props.selectedPage === "blog")? {color: "#023B59"}: {}}>Blog</a>
                        </li>
                        <li id="sobre">
                            <a href='/sobre' style={(props.selectedPage === "sobre")? {color: "#023B59"}: {}}>Sobre</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;