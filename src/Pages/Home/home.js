import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import MetaData from '../../meta/reactHelmet';
import "./home.css";

function Home(){

    const meta = {
        titlePage: "Ropeup | Home",
        titleSearch: "Ropeup | Home",
        description: "Ajudamos nossos clientes a alavancar seus resultados por meio da tecnologia. Venha conhecer nossos serviços!",
        keyWords: "Ropeup | Home | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    return(
        <div id="page-home">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header/>
            <div id="home-general">
                <div id="line">
                    <div id="text1">
                        <h1>Consultoria Empresarial Com Solução em Software</h1>
                        <h3>Trabalhe de maneira eficiente com o que é realmente importante usando softwares de gestão integrados e usuais</h3>
                        <div id="button-general">
                            <Button width="200px" color="#D40F1C" label="Otimize sua gestão com tecnologia"/>
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
                        <h2>Controle todos os dados da sua empresa em um único lugar</h2>
                        <h3>Otimizamos seus processos para melhor implantação de um sistema integrado feito especialmente para sua empresa</h3>
                        <div id="button-general">
                            <Button width="200px" color="#D40F1C" label="Conheça como trabalhamos"/>
                        </div>
                    </div>
                </div>
            <div id='link'/>
            </div>
                <div id="left">
                    <img src="/Imagens/Linha.jpg" alt="image2"></img>
                    <div id="menu">
                        <div id="lineComoFunciona">
                            <h2>Como funciona</h2>
                        </div>
                        <div id="line">
                            <div id="image1Menu">
                                <img src="/Imagens/Menu1.jpg" alt="image2"></img>
                            </div>
                            <div id="text1-menu">
                                <h4 id='numero-menu'>01</h4>
                                <h3>Diagnóstico dos problemas da sua empresa</h3>
                                <h5>Analisamos os gargalos que existem nos processos empresariais da sua empresa e na sua rotina</h5>
                            </div>
                        </div>
                        <div id="line">
                            <div id="text2-menu">
                                <h4 id='numero-menu'>02</h4>
                                <h3>Solução com softwares de gestão integrados</h3>
                                <h5>Identificamos em quais circunstâncias os principais softwares de gestão do mercado podem otimizar seus processos atuando de forma integrada</h5>
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
                                <h3>Implantação e otimização dos processos</h3>
                                <h5>Nos certificamos que as nossas soluções serão colocadas em prática por meio de processos consolidados</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="home-button">
                    <div id="button-up">
                        <Button width="200px" color="#D40F1C" label="Quero alavancar os meus resultados"/>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;