import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import "./capture.css";

function Capture(){
    return(
        <div id="page-capture">
            <Header/>
            <div id="capture-general">
                <div id="line">
                    <div id="image-top">
                        <img src="/Imagens/Capture1.jpeg" alt="image1" style={{height: 600, paddingTop: 125, width: 570}}></img>
                    </div>
                    <div id="capture-text1">
                        <div id="letras">
                            <h1 style={{fontSize: 64}}>Solução em softwares de gestão</h1>
                            <h3>Tenha o software empresarial adequado para sua empresa de forma estruturada completamente implementada</h3>
                        </div>
                    </div>
                </div>
                <div id="line2">
                    <div id="cards">
                        <div id="card1">
                            <h3><b>Consultoria</b></h3>
                            <h5>Para quem quer investir em tecnologia</h5>
                        </div>
                        <div id="card2">
                            <h3><b>Integração</b></h3>
                            <h5>Para quem quer otimizar sua ferramenta</h5>
                        </div>
                        <div id="card3">
                            <h3 style={{fontSize: 24}}><b>Personalização</b></h3>
                            <h5>Para quem sabe exatamente o que quer</h5>
                        </div>
                    </div>
                    <div id="capture-button">
                        <div id="capture-button-up">
                            <Button width="600px" color="#D40F1C" label="Quero alavancar os meus resultados"/>
                        </div>
                    </div>
                </div>
            </div>
                <div id="diagram">
                    <div id="image-top">
                        <img src="/Imagens/Capture2.jpeg" alt="image1" style={{width: "100%"}}></img>
                    </div>
                </div>
                <div id="capture-button">
                    <div id="capture-button-up">
                        <Button width="600px" color="#D40F1C" label="Falar com um especialista"/>
                    </div>
                </div>
                <div id="capture-end">
                    <div id="image-end">
                        <img src="/Imagens/Capture3.jpeg" alt="image1" style={{width: "100%"}}></img>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Capture;