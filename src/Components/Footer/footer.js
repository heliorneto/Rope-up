import React from 'react';
import Logo from './../../Components/Logo/logo.js';
import {useMedia} from "./../../hooks/media_queries";
import "./footer.css";

function Footer(){
    const {isPhone} = useMedia();

    return(
        <nav id="nav-footer">
            <div id="upper-footer">
                {
                    (isPhone)? <Logo color='#ffffff' width="60" heigth="60" fontSize="26"/>:
                    <Logo color='#ffffff' width="100" heigth="100" fontSize="36"/>
                }
                <a id="onde-estamos-footer" href='/sobre'>Sobre a Ropeup</a>
            </div>
            <p id="direitos"><small>©2020 Todos os direitos reservados</small></p>
        </nav>
    );
}

export default Footer;