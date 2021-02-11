import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import MetaData from '../../meta/reactHelmet';
import './login.css';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const meta = {
        titlePage: "Ropeup | Login",
        titleSearch: "Ropeup | Login",
        description: "Entre já na sua conta ropeup e desfute dos nossos serviços da melhor maneir possível!",
        keyWords: "Ropeup | Login | Entrar",
        imageUrl: "",
        imageAlt: "",
    }

    function Enter() {
        if(email==="helioneto29@hotmail.com" && password==="123"){
            alert("Bem-vindo(a) " + email);
            history.push('home');
        }else{
            alert("Email ou senha incorretos");
        }
    }

    return(
        <div className="page">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header selectedPage="login" />
            <div className="general">
                <div className="container">
                        <h1><b>Entrar</b></h1>
                        <Form className="inputs">
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Form.Group>
                            <Form.Group controlId="senha">
                                <Form.Control type="password" placeholder="Senha" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </Form.Group>
                            <Button variant="outline-dark" onClick={Enter}>Login</Button>                          
                            <hr/>
                            <Button variant="outline-dark" onClick={()=>history.push("cadastro")}>Criar conta</Button>
                        </Form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
