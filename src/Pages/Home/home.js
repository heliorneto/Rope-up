import React, {useState, useEffect} from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import "./home.css";
import { Button } from 'react-bootstrap';

function Home(){
    return(
        <div id="pageHome">
            <Header/>
            <div id="homeGeneral">
                <div id="line">
                    <div id="text1">
                        <h1>Personalize seu software empresarial</h1>
                        <h4>Trabalhe com o que é realmente importante dentro de um software de gestão de maneira integrada e eficiente</h4>
                        <div id="buttonGeneral">
                            <Button variant="danger">Quero um software personalizado</Button>
                        </div>
                    </div>
                    <div id="imageTop">
                        <img src="/Imagens/Imagem1.jpg" alt="image1"></img>
                    </div>
                </div>
                <div id="line">
                    <div id="image1">
                        <img src="/Imagens/Imagem2.jpg" alt="image2"></img>
                    </div>
                    <div id="text2">
                        <h1>Controle os dados da sua empresa onde estiver</h1>
                        <h4>Seu software de gestão intuitivo e fácil. Para você analisar os resultados da sua empresa em qualquer lugar</h4>
                        <div id="buttonGeneral">
                            <Button variant="danger">Conheça mais sobre nossos trabalhos</Button>
                        </div>
                    </div>
                </div>
            </div>
                <div id="left">
                    <img src="/Imagens/Linha.jpg" alt="image2"></img>
                    <div id="menu">
                        <div id="line">
                            <h1>Como funciona</h1>
                        </div>
                        <div id="line">
                            <div id="image1Menu">
                                <img src="/Imagens/Menu1.jpg" alt="image2"></img>
                            </div>
                            <div id="text1Menu">
                                <h1>01</h1>
                                <h3>Você tem uma necessidade de controle de dados</h3>
                                <h5>Você entende a importância da gestão por meio da tecnologia e dos dados e precisa de um software que não exija muito esforço de adequação</h5>
                            </div>
                        </div>
                        <div id="line">
                            <div id="text2Menu">
                                <h1>02</h1>
                                <h3>A ropeup desenvolve seu software</h3>
                                <h5>Criamos o software personalizado para as necessidades da sua empresa</h5>
                            </div>
                            <div id="image1Menu">
                                <img src="/Imagens/Menu2.jpg" alt="image2"></img>
                            </div>
                        </div>
                        <div id="line">
                            <div id="image1Menu">
                                <img src="/Imagens/Menu3.jpg" alt="image2"></img>
                            </div>
                            <div id="text3Menu">
                                <h1>03</h1>
                                <h3>Você administra seus dados de maneira eficiente</h3>
                                <h5>Pelo computador ou celular, no escritório ou na praia, seus dados atualizados e trabalhos para sua melhor análise e gestão</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="buttonUp">
                    <Button variant="danger">Quero alavancar os meus resultados</Button>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;