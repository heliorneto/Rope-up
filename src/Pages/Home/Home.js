import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./Home.css";
import { Button } from 'react-bootstrap';

function Home(){
    return(
        <div id="paginaHome">
            <Header/>
            <div id="homeGeral">
                <div id="linha">
                    <div id="Textos1">
                        <h1>Personalize seu software empresarial</h1>
                        <h4>Trabalhe com o que é realmente importante dentro de um software de gestão de maneira integrada e eficiente</h4>
                        <Button variant="danger">Quero um software personalizado</Button>
                    </div>
                    <div id="Imagem1">
                        <img src="/Imagens/Imagem1.jpg" alt="Imagem1"></img>
                    </div>
                </div>
                <div id="linha">
                    <div id="Imagem1">
                        <img src="/Imagens/Imagem2.jpg" alt="Imagem2"></img>
                    </div>
                    <div id="Textos2">
                        <h1>Controle os dados da sua empresa onde estiver</h1>
                        <h4>Seu software de gestão intuitivo e fácil. Para você analisar os resultados da sua empresa em qualquer lugar</h4>
                        <Button variant="danger">Conheça mais sobre nossos trabalhos</Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;