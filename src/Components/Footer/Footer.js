import React, { useState, useEffect } from 'react';
import { Nav, Navbar, FormControl, InputGroup, Button, Dropdown}from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer(){
    return(
        <Navbar id="navbarFooter" expand="lg">
            <Nav id="logoFooter" href="/home">
                <img src="/Imagens/Logo-Footer.jpg" alt="Logo"></img>
            </Nav>
            <Nav id="optionsFooter">
                <div id="comoFuncionaFooter">
                    <h3>Como Funciona</h3>
                </div>
                <div id="casesFooter">
                    <h3>Cases</h3>
                </div>
                <div id="blogFooter">
                    <h3>Blog</h3>
                </div>
                <div id="loginFooter">
                    <h3><b>Login</b></h3>
                </div>
                <div id="ondeEstamosFooter">
                    <h3>Onde Estamos</h3>
                </div>
            </Nav>
            <Nav id="direitos">
                <h4>@2020 Todos os direitos reservados</h4>
            </Nav>
        </Navbar>
    );
}

export default Footer;