import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import "./header.css";

function Header(){
    return(
        <nav id="navbar" expand="lg">
            <ul id="Logo" href="/home">
                <Logo width="120" height="120" color="#000" fontSize="30"/>
            </ul>
            <ul id="options">
                <li id="comoFunciona">
                    <a href='/home'>Como Funciona</a>
                </li>
                <li id="sobre">
                    <a href='/login'>Sobre</a>
                </li>
                <li id="blog">
                    <a href='/blog'>Blog</a>
                </li>
                <li id="ajuda">
                    <a href='/login'>Ajuda</a>
                </li>
                <li id="login">
                    <a href='/login'><b>Login</b></a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;