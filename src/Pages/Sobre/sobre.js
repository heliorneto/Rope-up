import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import "./sobre.css";

function Sobre() {
    return(
        <div id="sobre-page">
            <Header/>
            <div id="sobre-general">
                <div id="introducao-text">
                    <div id="introducao-title">
                        <h1>Sobre a Roupeup</h1>
                    </div>
                    <div id="introducao">
                        <h3 id="text">Acreditamos na utilização da <b>tecnologia para uma gestão mais inteligente.</b>Nossos especialistas desenvolvedores são conectados com grandes universidaes do país sempre levando <b>para seus projetos.</b></h3>
                        <h3 id="text">Nós movemos pelo <b>sucesso do cliente,</b> sempre buscando o resultado e a melhor experiência detro e fora do projeto.</h3>
                    </div>
                </div>
                <div id="image-top">
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Sobre;