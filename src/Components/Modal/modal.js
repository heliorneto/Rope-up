import React from 'react';
import './modal.css';

export function Modal(props) {

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <header><img src="/icons/check.JPG" alt="Fechar modal" style={{height:'15vh'}}></img></header>
                <strong>Obrigado!</strong>
                <p>Você respondeu ao nosso formulário.</p>
                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal" onClick={()=>props.clickAction()}></img>
                </button>
            </div>
        </div>
    )
}