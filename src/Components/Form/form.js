import React from 'react';
import './form.css';
import Button from '../../Components/Button/button';


/*
   This component renders the capture page's form.
   It takes the following props:
   - action: the url of the page that is going to receive the data
   It also has configurable error messages for the HTML5 form validation
   system (they can be configured in the errorMessages object).
*/

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputStatus: []
        };
        this.formInputs = [];
        this.errorMessages = {
            invalidEmail: "Verifique o formato do endereço de email inserido.",
            invalidPattern: "Este campo deve conter apenas números -() e +.",
            missingValue: "Preencha este campo obrigatório.",
            invalidNumberRange: "Entre um número válido."
        }
        this.generateMessage = this.generateMessage.bind(this);
    }

    componentDidMount(){
        this.formInputs = document.querySelectorAll('.form-container > input,select,textarea');
        //Status 0 for all inputs (no errors)
        this.setState({inputStatus: new Array(this.formInputs.length).fill(0)});
    }

    addInputErrorFlag(inputIndex,event){
        let newStatus = this.state.inputStatus;
        //Preventing browser's default error message
        event.preventDefault();
        //Status 1 means there's an input error (invalid)
        newStatus[inputIndex] = 1;
        this.setState({inputStatus: newStatus});
    }

    removeInputErrorFlag(inputIndex){
        let newStatus = this.state.inputStatus;
        newStatus[inputIndex] = 0;
        this.setState({inputStatus: newStatus});
    }

    generateMessage(inputIndex){
        const errorTypes = this.formInputs[inputIndex].validity;
        if(errorTypes.valueMissing){
            return this.errorMessages.missingValue;
        }else if(errorTypes.typeMismatch){
            return this.errorMessages.invalidEmail;
        }else if(errorTypes.patternMismatch){
            return this.errorMessages.invalidPattern;
        }else if(errorTypes.rangeOverflow || errorTypes.rangeUnderflow){
            return this.errorMessages.invalidNumberRange;
        }
        //Fallback, returning the default error message
        return this.formInputs[inputIndex].validationMessage;
    }

    render(){
        return (
            <form method='POST' action={this.props.action} className="form-container">
                <label htmlFor="nome">Nome <span className="form-required">*</span></label>
                <input 
                id="nome" 
                type="text" 
                name="Name" 
                maxLength="70" 
                required
                onInput={()=>this.removeInputErrorFlag(0)}
                onInvalid={(e)=>this.addInputErrorFlag(0,e)}
                className={(this.state.inputStatus[0]) && 'invalid'}
                />
                {
                    (this.state.inputStatus[0])? <div className='form-error-msg'>
                    {this.generateMessage(0)}
                    </div>: null
                }
                <label htmlFor="sobrenome">Sobrenome <span className="form-required">*</span></label>
                <input 
                id="sobrenome" 
                type="text" 
                name="Surname" 
                maxLength="70" 
                required
                onInput={()=>this.removeInputErrorFlag(1)}
                onInvalid={(e)=>this.addInputErrorFlag(1,e)}
                className={(this.state.inputStatus[1]) && 'invalid'}
                />
                {
                    (this.state.inputStatus[1])? <div className='form-error-msg'>
                    {this.generateMessage(1)}
                    </div>: null
                }
                <label htmlFor="email">Email <span className="form-required">*</span></label>
                <input 
                id="email" 
                type="email" 
                name="Email" 
                required
                onInput={()=>this.removeInputErrorFlag(2)}
                onInvalid={(e)=>this.addInputErrorFlag(2,e)}
                className={(this.state.inputStatus[2]) && 'invalid'}/>
                {
                    (this.state.inputStatus[2])? <div className='form-error-msg'>
                    {this.generateMessage(2)}
                    </div>: null
                }
                <label htmlFor="telefone">Telefone <span className="form-required">*</span></label>
                <input 
                id="telefone" 
                type="tel" 
                name="Phone" 
                pattern="(\+[0-9]{2})? ?(\(?0?[0-9]{2}\)?) ?[0-9]{5}-?[0-9]{4}" 
                required
                onInput={()=>this.removeInputErrorFlag(3)}
                onInvalid={(e)=>this.addInputErrorFlag(3,e)}
                className={(this.state.inputStatus[3]) && 'invalid'}/>
                {
                    (this.state.inputStatus[3])? <div className='form-error-msg'>
                    {this.generateMessage(3)}
                    </div>: null
                }
                <label htmlFor="telefone-alternativo">Telefone (alternativo)</label>
                <input 
                id="telefone-alternativo" 
                type="tel" 
                name="Phone2" 
                pattern="(\+[0-9]{2})? ?(\(?0?[0-9]{2}\)?) ?[0-9]{5}-?[0-9]{4}"
                onInput={()=>this.removeInputErrorFlag(4)}
                onInvalid={(e)=>this.addInputErrorFlag(4,e)}
                className={(this.state.inputStatus[4]) && 'invalid'}/>
                {
                    (this.state.inputStatus[4])? <div className='form-error-msg'>
                    {this.generateMessage(4)}
                    </div>: null
                }
                <label htmlFor="cargo">Cargo <span className="form-required">*</span></label>
                <input 
                id="cargo" 
                type="text" 
                name="Role" 
                maxLength="40" 
                required
                onInput={()=>this.removeInputErrorFlag(5)}
                onInvalid={(e)=>this.addInputErrorFlag(5,e)}
                className={(this.state.inputStatus[5]) && 'invalid'}/>
                {
                    (this.state.inputStatus[5])? <div className='form-error-msg'>
                    {this.generateMessage(5)}
                    </div>: null
                }
                <label htmlFor="empresa">Nome da empresa <span className="form-required">*</span></label>
                <input 
                id="empresa" 
                type="text" 
                name="Enterprise" 
                maxLength="70" 
                required
                onInput={()=>this.removeInputErrorFlag(6)}
                onInvalid={(e)=>this.addInputErrorFlag(6,e)}
                className={(this.state.inputStatus[6]) && 'invalid'}/>
                {
                    (this.state.inputStatus[6])? <div className='form-error-msg'>
                    {this.generateMessage(6)}
                    </div>: null
                }
                <label htmlFor="num-funcionarios">Número de funcionários <span className="form-required">*</span></label>
                <input 
                id="num-funcionarios" 
                type="number" 
                name="NumEmployees" 
                min="1" 
                max="65535" 
                required
                onInput={()=>this.removeInputErrorFlag(7)}
                onInvalid={(e)=>this.addInputErrorFlag(7,e)}
                className={(this.state.inputStatus[7]) && 'invalid'}/>
                {
                    (this.state.inputStatus[7])? <div className='form-error-msg'>
                    {this.generateMessage(7)}
                    </div>: null
                }
                <div className="button-form">
                    <Button width="200px" color="#D40F1C" color2='white' label="Quero alavancar os meus resultados" clickAction={this.props.clickAction}/>
                </div>
            </form>
        );
    }
}

export default Form;