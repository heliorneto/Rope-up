import React, { useState, useEffect } from 'react';
import { Nav, Navbar, FormControl, InputGroup, Button, Dropdown}from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from './../../Components/Logo/logo.js';
import "./footer.css";

function Footer(){
    return(
        <Navbar id="navbarFooter" expand="lg">
            <Nav id="LogoFooter" href="/home">
                <Logo color='#ffffff' width="120" heigth="120" fontSize="20"/>
            </Nav>
            <Nav id="OpcoesFooter">
                <div id="ComoFuncionaFooter">
                    <h3>Como Funciona</h3>
                </div>
                <div id="CasesFooter">
                    <h3>Cases</h3>
                </div>
                <div id="BlogFooter">
                    <h3>Blog</h3>
                </div>
                <div id="LoginFooter">
                    <h3><b>Login</b></h3>
                </div>
                <div id="OndeEstamosFooter">
                    <h3>Onde Estamos</h3>
                </div>
            </Nav>
            <Nav id="Direitos">
                <h4>@2020 Todos os direitos reservados</h4>
            </Nav>
        </Navbar>
    );
}

export default Footer;