import React from 'react';
import Logo from './../../Components/Logo/logo.js';
import {useMedia} from "./../../hooks/media_queries";
import "./footer.css";

function Footer(){
    const {isPhone} = useMedia();

    if(!isPhone){
        return(
            <nav id="nav-footer">
                <div id="upper-footer">
                    <Logo color='#ffffff' width="130" heigth="120" fontSize="40"/>
                    <a id="onde-estamos-footer" href='/sobre'>Onde Estamos</a>
                </div>
                <p id="direitos"><small>©2020 Todos os direitos reservados</small></p>
            </nav>
        );
    }else{
        return(
            <nav id="nav-footer">
                <div id="upper-footer">
                    <Logo color='#ffffff' width="60" heigth="60" fontSize="26"/>
                    <a id="onde-estamos-footer" href='/sobre'>Onde Estamos</a>
                </div>
                <p id="direitos"><small>©2020 Todos os direitos reservados</small></p>
            </nav>
        );
    }
}

export default Footer;