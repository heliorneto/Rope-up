import {React, useState, useEffect} from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import MetaData from '../../meta/reactHelmet';
import "./home.css";

function Home(){
    const [isPhone, setPhone] = useState(window.matchMedia("(max-width: 600px), (max-height: 600px) and (orientation: landscape)").matches);

    const meta = {
        titlePage: "Ropeup | Home",
        titleSearch: "Ropeup | Home",
        description: "Ajudamos nossos clientes a alavancar seus resultados por meio da tecnologia. Venha conhecer nossos serviços!",
        keyWords: "Ropeup | Home | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    function goCapture(where = 0) {
        switch(where){
            case 1: window.location = '/capture#begin-diagram'; break;
            case 2: window.location = '/capture#begin-form'; break;
            case 0:
            default:
                window.location = '/capture';
        }
    }

    useEffect(()=>{
        const checkDisplay = () =>{
            setPhone(window.matchMedia("(max-width: 800px), (max-height: 500px) and (orientation: landscape)").matches);
        }

        window.addEventListener('resize',checkDisplay);
        return () => {
            window.removeEventListener('resize',checkDisplay);
        }
    },[isPhone])

    return(
        <div id="page-home">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header/>
            <div id="home-general">
                <div className="line">
                    <div id="text1">
                        <h1>Consultoria empresarial com soluções tecnológicas</h1>
                        <h3>Otimize sua gestão através de um trabalho automatizado e ágil usando softwares e transformação tecnológica</h3>
                        <div className="button-general">
                            <Button width="200px" color="#D40F1C" color2='white' label="Otimize sua gestão com tecnologia" clickAction={goCapture}/>
                        </div>
                    </div>
                    <div id="image-top-home">
                        {(isPhone)? <img src="/Imagens/HomeMobile1.png" alt="image1" style={{maxWidth: '70vw', height: 'auto'}}/>:
                        <img src="/Imagens/Imagem1.png" alt="image1" style={{maxWidth: '40vw', height: 'auto'}}/>}
                    </div>
                </div>
                <div className="line">
                    <div id="image1">
                        <img src="/Imagens/Imagem2.png" alt="image2" style={{maxWidth: '40vw', height: 'auto'}}></img>
                    </div>
                    <div id="text20">
                        <h2>Controle todos os dados e o gerenciamento da sua empresa em um único lugar</h2>
                        <h3>Otimizamos seus processos para melhor implantação de um sistema integrado personalizado especialmente para sua empresa</h3>
                        <div className="button-general">
                            <Button width="200px" color="#D40F1C" color2='white' label="Conheça como trabalhamos" clickAction={()=>goCapture(1)}/>
                        </div>
                    </div>
                </div>
            <div id='link'/>
            </div>
                <div id="lineComoFunciona">
                    <h2>Como funciona</h2>
                </div>
                <div id="left">
                    <img src="/Imagens/Linha.png" alt="image2" style={{width: "auto", height: "1065px"}}/>
                    <div id="menu-home">
                        <div className="line-menu">
                            <div id="image1-menu-home">
                                <img src="/Imagens/Menu1.png" alt="image2" className="image-menu" id="menu-img1"/>
                            </div>
                            <div id="text1-menu-home">
                                <h4 className="numero-menu">01</h4>
                                <h3>Diagnóstico dos problemas da sua empresa</h3>
                                <h5>Analisamos os gargalos que existem nos processos empresariais da sua empresa e na sua rotina</h5>
                            </div>
                        </div>
                        <div className="line-menu">
                            <div id="text2-menu-home">
                                <h4 className="numero-menu">02</h4>
                                <h3>Solução com softwares de gestão integrados</h3>
                                <h5>Aprimoramos a tecnologia na sua empresa para que os processos funcionem adequadamente</h5>
                            </div>
                            <div id="image2-menu-home">
                                <img src="/Imagens/Menu2.png" alt="image2" className="image-menu"/>
                            </div>
                        </div>
                        <div className="line-menu">
                            <div id="image3-menu-home">
                                <img src="/Imagens/Menu3.png" alt="image2" className="image-menu"/>
                            </div>
                            <div id="text3-menu-home">
                                <h4 className="numero-menu">03</h4>
                                <h3>Implantação e otimização dos processos</h3>
                                <h5>Nos certificamos que as nossas soluções serão colocadas em prática por meio de processos consolidados</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="home-button">
                    <div id="button-up">
                        <Button width="200px" color="#D40F1C" color2='white' label="Quero alavancar os meus resultados" clickAction={()=> goCapture(2)}/>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;