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
                    <div id="introducao-title">
                        <h1>Sobre a Ropeup</h1>
                    </div>
                    <div id="introducao">
                        <h3 id="text">Acreditamos na utilização da <b>tecnologia para uma gestão mais inteligente. </b>Nossos especialistas desenvolvedores são conectados com grandes universidaes do país sempre levando <b>para seus projetos.</b></h3>
                        <h3 id="text">Nos movemos pelo <b>sucesso do cliente,</b> sempre buscando o resultado e a melhor experiência detro e fora do projeto.</h3>
                    </div>
                </div>
                <img id="image-top" src="/Imagens/Sobre1.png" alt="Sobre1" ></img>
            </div>
            <Footer/>
        </div>
    );
}

export default Sobre;