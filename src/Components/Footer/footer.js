import React from 'react';
import Logo from './../../Components/Logo/logo.js';
import "./footer.css";

function Footer(){
    return(
        <nav id="nav-footer">
            <ul id="logo-footer" href="/home">
                <Logo id="logo" color='#ffffff' width="130" heigth="120" fontSize="40"/>
            </ul>
            <ul id="opcoes-footer">
                <li id="onde-estamos-footer">
                    <a href=''>Onde Estamos</a>
                </li>
            </ul>
            <ul id="direitos">
                <p><small>©2020 Todos os direitos reservados</small></p>
            </ul>
        </nav>
    );
}

export default Footer;