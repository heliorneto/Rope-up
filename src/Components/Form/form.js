import React from 'react';
import './form.css';

function Form(props){
    return (
        <form name={props.name} method='POST' action={props.action} className="form-container">
            <label htmlFor="nome">Nome <span className="form-required">*</span></label>
            <input id="nome" type="text" name="Name" maxLength="70" required/>
            <label htmlFor="sobrenome">Sobrenome <span className="form-required">*</span></label>
            <input id="sobrenome" type="text" name="Surname" maxLength="70" required/>
            <label htmlFor="email">Email <span className="form-required">*</span></label>
            <input id="email" type="email" name="Email" required/>
            <label htmlFor="telefone">Telefone <span className="form-required">*</span></label>
            <input id="telefone" type="tel" name="Phone" pattern="(\+[0-9]{2})? ?(\(?0?[0-9]{2}\)?) ?[0-9]{5}-?[0-9]{4}" required/>
            <label htmlFor="telefone-alternativo">Telefone (alternativo)</label>
            <input id="telefone-alternativo" type="tel" name="Phone2" pattern="(\+[0-9]{2})? ?(\(?0?[0-9]{2}\)?) ?[0-9]{5}-?[0-9]{4}"/>
            <label htmlFor="cargo">Cargo <span className="form-required">*</span></label>
            <input id="cargo" type="text" name="Role" maxLength="40" required/>
            <label htmlFor="empresa">Nome da empresa <span className="form-required">*</span></label>
            <input id="empresa" type="text" name="Enterprise" maxLength="70" required/>
            <label htmlFor="num-funcionarios">Número de funcionários <span className="form-required">*</span></label>
            <input id="num-funcionarios" type="number" name="NumEmployees" min="1" max="65535" required/>
            <input type="submit" value="Fale com um especialista"/>
        </form>
    );
}

export default Form;