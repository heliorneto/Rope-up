import React from 'react';
import './modal.css';

/*
This component takes the following props:
error: boolean indicating if the error version of the modal should be displayed
closeFunction: function to execute when closing the modal box
*/

export function Modal(props) {
    const successLabels = ["Obrigado!", "Você preencheu nosso formulário!"];
    const errorLabels = ["Ops!", "Um erro ocorreu e não conseguimos receber suas informações. Tente novamente!"];

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div id="modal-image"><img src={(props.error)? "icons/Error.png": "icons/Success.png"} alt={(props.error)? "Erro!": "Sucesso!"} style={{height:'15vh', width: "auto"}}></img></div>
                <strong>{(props.error)? errorLabels[0]: successLabels[0]}</strong>
                <p>{(props.error)? errorLabels[1]: successLabels[1]}</p>
                <button type="button">
                    <img src="icons/Close.png" alt="Fechar" onClick={()=>props.closeFunction()} style={{cursor: 'pointer'}}></img>
                </button>
            </div>
        </div>
    )
}