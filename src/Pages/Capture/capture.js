import {React, useState} from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import {Modal} from '../../Components/Modal/modal';
import MetaData from '../../meta/reactHelmet';
import Form from '../../Components/Form/form'
import {useMedia} from "./../../hooks/media_queries";
import CMSConfig from "./../../cms_config";
import "./capture.css";

function Capture(){
    const {isPhone} = useMedia(); 
    const [isModalOpen, setModalOpen] = useState(false);
    const [formError, setFormError] = useState(false);

    const meta = {
        titlePage: "Ropeup | Contato",
        titleSearch: "Ropeup | Contato",
        description: "Venha conhecer mais dos nossos serviços e como podemos te ajudar através da tecnologia. Não perca tempo e fale com um especialista",
        keyWords: "Ropeup | Contato | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    function openModal() {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
        document.querySelector('html').style.scrollBehavior = "auto";
        setModalOpen(true);
    }

    function submitSuccess(response){
        setFormError(false);
        openModal();
    }

    function submitError(error){
        setFormError(true);
        // Printing error info on console for debug process
        console.log(error);
        openModal();
    }

    function closeModal() {
        document.body.style.overflowY = "";
        document.body.style.position = "";
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = "";
        document.querySelector('html').removeAttribute('style');
        setModalOpen(false);
    }

    function goForms() {
       window.location.href = '/contato#begin-form';
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
                            <img src="/Imagens/Card1.png" alt="card1" style={{height: '95px', paddingTop: '10px'}}/>
                            <h3>Consultoria</h3>
                            {(!isPhone) && <p style={{paddingLeft: '15px', paddingRight: '15px'}}>Para quem quer investir em tecnologia</p>}
                        </div>
                        <div className="capture-card">
                            <img src="/Imagens/Card2.png" alt="card2" style={{height: '95px', paddingTop: '10px'}}/>
                            <h3>Integração</h3>
                            {(!isPhone) && <p>Para quem quer otimizar sua ferramenta</p>}
                        </div>
                        <div className="capture-card">
                            <img src="/Imagens/Card3.png" alt="card3" style={{height: '95px', paddingTop: '10px'}}/>
                            <h3>Personalização</h3>
                            {(!isPhone) && <p>Para quem sabe exatamente o que quer</p>}
                        </div>
                    </div>
                    <div id="capture-button">
                        <Button 
                        clickAction={goForms}
                        text="Quero alavancar os meus resultados" 
                        width={(isPhone)? "300px": "600px"}
                        height="65px" 
                        backgroundColor="#D40F1C" 
                        textColor='#fff' 
                        />
                    </div>
                </div>
            </div>
                <div id="begin-diagram"/>
                <div id="diagram">
                    <h3>O processo de transformação</h3>
                    <img src="/Imagens/Processo.png" alt="Diagrama do processo de transformação"/>
                </div>
                <div id="begin-form"/>
                <h3 id="form-title">Preencha o formulário abaixo para que possamos entrar em contato com você o mais breve possível:</h3>
                <div id="capture-form-area">
                    <div id="capture-form">
                        <p><span id="form-obligatory">*</span> Campo obrigatório</p>
                        <Form 
                        name="cli-info" 
                        action={`${CMSConfig.getFullURL()}/items/lead`}
                        errorFunction={submitError} 
                        successFunction={submitSuccess}
                        />
                    </div>
                    <img src="/Imagens/Capture3.png" alt="image1"></img>
                </div>
                {isModalOpen && 
                    <Modal closeFunction={closeModal}>
                        <div id="modal-container">
                            <div id="modal-image">
                                <img 
                                src={(formError)? "/Imagens/icons/Error.png": "/Imagens/icons/Success.png"} 
                                alt={(formError)? "Erro!": "Sucesso!"} 
                                style={{height:'15vh', width: "auto"}}/>
                            </div>
                            <h4 id="modal-title">{(formError)? "Ops!": "Obrigado!"}</h4>
                            <p id="modal-text">{(formError)? "Ocorreu um erro e não conseguimos receber suas informações. Tente novamente!": "Nossa equipe entrará em contato com você o mais breve possível!"}</p>
                        </div>
                    </Modal>
                }
            <Footer/>
        </div>
    );
}

export default Capture;