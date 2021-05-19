import React from 'react';
import './modal.css';

/*
This component takes the following props:
closeFunction: function to execute to close the modal box
children: content to be shown inside the modal
*/

export function Modal(props) {
    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <button className="modal-close" type="button">
                    <img src="/Imagens/icons/Close.png" alt="Fechar" onClick={()=>props.closeFunction()} style={{cursor: 'pointer'}}></img>
                </button>
                {props.children}
            </div>
        </div>
    );
}