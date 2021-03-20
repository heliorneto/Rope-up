import React from 'react';
import './modal.css';

/*
This component takes the following props:
- clickAction: The action after a click event
- label1: The text of the Modal
- label2: The subtext of the Modal
- image: The image of the Modal
*/

export function Modal(props) {

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <header><img src={props.image} alt="Fechar modal" style={{height:'15vh'}}></img></header>
                <strong>{props.label1}</strong>
                <p>{props.label2}</p>
                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal" onClick={()=>props.clickAction()} style={{cursor: 'pointer'}}></img>
                </button>
            </div>
        </div>
    )
}