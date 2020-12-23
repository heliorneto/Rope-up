import React from 'react';
import './Register.css';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import {Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function Register(){
    const History = useHistory();

    return(
        <div id="page">
            <Header/>
                <div id="generalRegister">
                    <div id="containerRegister">
                        <h1><b>Cadastrar</b></h1>
                        <div id="inputsRegister">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Telefone" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Nome da Empresa" />
                            </Form.Group>
                            <Button variant="outline-dark" onClick={() => {History.push('login')}}>Criar Conta</Button>{' '}
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Register;