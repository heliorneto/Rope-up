import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import MetaData from '../../meta/reactHelmet';
import "./sobre.css";

function Sobre() {

    const meta = {
        titlePage: "Ropeup | Sobre",
        titleSearch: "Ropeup | Sobre",
        description: "Empresa de consultoria em tecnologia. Acreditamos na utilização da tecnologia para uma gestão mais inteligente. Venha já conhecer nossa história e fazer parte dessa jornada!",
        keyWords: "Ropeup | Sobre | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    return(
        <div id="sobre-page">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header selectedPage="sobre"/>
            <div id="sobre-general" >
                <div id="introducao-text">
                    <h1 id="introducao-title">Sobre a ropeup</h1>
                    <p id="text">Acreditamos na utilização da <strong>tecnologia para uma gestão mais inteligente.</strong> Nossos especialistas e desenvolvedores são conectados com grandes universidades do país sempre levando <strong>inovação para seus projetos.</strong></p>
                    <p id="text">Nos movemos pelo <strong>sucesso do cliente,</strong> sempre buscando o resultado e a melhor experiência dentro e fora do projeto.</p>
                </div>
                <img id="image-top" src="/Imagens/Sobre1.png" alt="Sobre1"/>
            </div>
            <Footer/>
        </div>
    );
}

export default Sobre;