import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Login.css';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

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
            <Header />
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
