import React, { useState, useEffect } from 'react';
import { Nav, Navbar, FormControl, InputGroup, Button, Dropdown}from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/logo.js';
import "./header.css";

function Header(){
    return(
        <div id="navbar" expand="lg">
            <div id="Logo" href="/home">
                <Logo width="120" height="120" color="#000" fontSize="30"/>
            </div>
            <div id="options">
                <div id="comoFunciona">
                    <h3>Como Funciona</h3>
                </div>
                <div id="sobre">
                    <h3>Sobre</h3>
                </div>
                <div id="blog">
                    <h3>Blog</h3>
                </div>
                <div id="ajuda">
                    <h3>Ajuda</h3>
                </div>
                <div id="login">
                    <h3><b>Login</b></h3>
                </div>
            </div>
        </div>
    );
}

export default Header;