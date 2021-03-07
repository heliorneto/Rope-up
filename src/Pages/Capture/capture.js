import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import MetaData from '../../meta/reactHelmet';
import Form from '../../Components/Form/form'
import "./capture.css";

function Capture(){
    const isPhone = window.matchMedia("(max-width: 600px)").matches;

    const meta = {
        titlePage: "Ropeup | Captura",
        titleSearch: "Ropeup | Captura",
        description: "Venha conhecer mais dos nossos serviços e como podemos te ajudar através da tecnologia. Não perca tempo e fale com um especialista",
        keyWords: "Ropeup | Captura | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    return(
        <div id="page-capture">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header/>
            <div id="capture-general">
                <div id="capture-heading">
                    <img src="/Imagens/Capture1.png" alt="image1"/>
                    <div id="heading-text">
                        <h1>Solução em softwares de gestão</h1>
                        <p>Tenha uma consultoria tecnológica especializada e dedicada para a implementação da solução tecnológica mais adequada para seu negócio</p>
                    </div>
                </div>
                <div id="line2">
                    <div id="cards">
                        <div className="capture-card">
                            <img src="/Imagens/Card1.png" alt="card1"/>
                            <h3>Consultoria</h3>
                            {(!isPhone) && <p>Para quem quer investir em tecnologia</p>}
                        </div>
                        <div className="capture-card">
                            <img src="/Imagens/Card2.png" alt="card2"/>
                            <h3>Integração</h3>
                            {(!isPhone) && <p>Para quem quer otimizar sua ferramenta</p>}
                        </div>
                        <div className="capture-card">
                            <img src="/Imagens/Card3.png" alt="card3"/>
                            <h3>Personalização</h3>
                            {(!isPhone) && <p>Para quem sabe exatamente o que quer</p>}
                        </div>
                    </div>
                    <div id="capture-button">
                        <Button width={(isPhone)? "300px": "600px"} color="#D40F1C" label="Quero alavancar os meus resultados"/>
                    </div>
                </div>
            </div>
                <div id="diagram">
                    <h3>O processo de transformação</h3>
                    <img src="/Imagens/Processo.png" alt="Diagrama do processo de transformação"/>
                </div>
                <h3 id="form-title">Preencha o formulário abaixo para que possamos entrar em contato com você o mais breve possível:</h3>
                <div id="capture-form-area">
                    <div id="capture-form">
                        <p><span id="form-obligatory">*</span> Campo obrigatório</p>
                        <Form action="#"/>
                    </div>
                    <img src="/Imagens/Capture3.png" alt="image1"></img>
                </div>
            <Footer/>
        </div>
    );
}

export default Capture;