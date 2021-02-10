import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import Form from '../../Components/Form/form'
import "./capture.css";

function Capture(){
    return(
        <div id="page-capture">
            <Header/>
            <div id="capture-general">
                <div id="line">
                    <div id="image-top">
                        <img src="/Imagens/Capture1.png" alt="image1" style={{height: 600, paddingTop: 125, width: 570}}></img>
                    </div>
                    <div id="capture-text1">
                        <div id="letras">
                            <h1 style={{fontSize: 64}}>Solução em softwares de gestão</h1>
                            <h3 id="letras-texto">Tenha o software empresarial adequado para sua empresa de forma estruturada completamente implementada</h3>
                        </div>
                    </div>
                </div>
                <div id="line2">
                    <div id="cards">
                        <div id="card1">
                            <img src="/Imagens/Card1.png" alt="card1" style={{height: "90px"}}></img>
                            <h3 id="card-text"><b>Consultoria</b></h3>
                            <h5>Para quem quer investir em tecnologia</h5>
                        </div>
                        <div id="card2">
                            <img src="/Imagens/Card2.png" alt="card2" style={{height: "100px"}}></img>
                            <h3 id="card-text"><b>Integração</b></h3>
                            <h5>Para quem quer otimizar sua ferramenta</h5>
                        </div>
                        <div id="card3">
                            <img src="/Imagens/Card3.png" alt="card3" style={{height: "100px"}}></img>
                            <h3 id="card-text"><b>Personalização</b></h3>
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
                    <div id="image-top-capture">
                        <div id="image-text">
                            <h3><b>O processo de transformação</b></h3>
                        </div>
                    </div>
                </div>
                 <h3 id="form-title">Preencha o formulário abaixo para que possamos entrar em contato com você o mais breve possível:</h3>
                <div id="capture-form-area">
                    <div id="capture-form">
                        <Form action="#"/>
                    </div>
                    <img src="/Imagens/Capture3.png" alt="image1" style={{height: "500px"}}></img>
                </div>
            <Footer/>
        </div>
    );
}

export default Capture;