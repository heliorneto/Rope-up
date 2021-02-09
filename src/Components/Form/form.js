import React from 'react';
import './form.css';

function Form(props){
    return (
        <form name={props.name} method='POST' action={props.action} className="form-container">
            <label>Nome <span className="form-required">*</span></label>
            <input type="text" name="Name" maxLength="70" required/>
            <label>Sobrenome <span className="form-required">*</span></label>
            <input type="text" name="Surname" maxLength="70" required/>
            <label>Email <span className="form-required">*</span></label>
            <input type="email" name="Email" required/>
            <label>Telefone <span className="form-required">*</span></label>
            <input type="tel" name="Phone" required/>
            <label>Telefone (alternativo)</label>
            <input type="tel" name="Phone2"/>
            <label>Cargo <span className="form-required">*</span></label>
            <input type="text" name="Role" maxLength="40" required/>
            <label>Nome da empresa <span className="form-required">*</span></label>
            <input type="text" name="Enterprise" maxLength="70" required/>
            <label>Número de funcionários <span className="form-required">*</span></label>
            <input type="number" name="NumEmployees" min="1" max="65535" required/>
            <input type="submit" value="Fale com um especialista"/>
        </form>
    );
}

export default Form;