import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import "./home.css";

function Home(){
    return(
        <div id="page-home">
            <Header/>
            <div id="home-general">
                <div id="line">
                    <div id="text1">
                        <h1>Consultoria Empresarial Com Solução em Software</h1>
                        <textBar select="true" placeholder="Buscar"></textBar>
                        <h3>Trabalhe de maneira eficiente com o que é realmente importante usando softwares de gestão indegrados e usuais</h3>
                        <div id="button-general">
                            <Button label="Otimize sua gestão com tecnologia"/>
                        </div>
                    </div>
                    <div id="image-top">
                        <img src="/Imagens/Imagem1.jpg" alt="image1"></img>
                    </div>
                </div>
                <div id="line">
                    <div id="image1">
                        <img src="/Imagens/Imagem2.jpg" alt="image2"></img>
                    </div>
                    <div id="text2">
                        <h2>Controle toos os dados da sua empresa em um unico lugar</h2>
                        <h3>Otimizamos seus processos para melhor implatação de um sistema integrado feito especialmente para sua empresa</h3>
                        <div id="button-general">
                            <Button label="Conheça como trabalhamos"/>
                        </div>
                    </div>
                </div>
            </div>
                <div id="left">
                    <img src="/Imagens/Linha.jpg" alt="image2"></img>
                    <div id="menu">
                        <div id="line">
                            <h2>Como funciona</h2>
                        </div>
                        <div id="line">
                            <div id="image1Menu">
                                <img src="/Imagens/Menu1.jpg" alt="image2"></img>
                            </div>
                            <div id="text1-menu">
                                <h4 id='numero-menu'>01</h4>
                                <h3>Diagnostico dos problemas da sua empresa</h3>
                                <h5>Analisamos os gargalos que existem nos processos empresariais da sua empresa da sua rotina</h5>
                            </div>
                        </div>
                        <div id="line">
                            <div id="text2-menu">
                                <h4 id='numero-menu'>02</h4>
                                <h3>Solução com softwares de gestão integrados</h3>
                                <h5>Indentificamos em quais circunstâncias os principais softwares de gestão (do mercado) podem otimizar seus processos atuando de forma integrada</h5>
                            </div>
                            <div id="image1-menu">
                                <img src="/Imagens/Menu2.jpg" alt="image2"></img>
                            </div>
                        </div>
                        <div id="line">
                            <div id="image1-menu">
                                <img src="/Imagens/Menu3.jpg" alt="image2"></img>
                            </div>
                            <div id="text3-menu">
                                <h4 id='numero-menu'>03</h4>
                                <h3>Implatação e otimização dos processos</h3>
                                <h5>Nos certicamos que as nossas soluções serão colocadas em prática por meio de processos consolidados</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="button-up">
                    <Button label="Quero alavancar os meus resultados"/>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;