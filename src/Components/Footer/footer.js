import {React, useState, useEffect} from 'react';
import Logo from './../../Components/Logo/logo.js';
import "./footer.css";

function Footer(){

    const [isPhone, setPhone] = useState(window.matchMedia("(max-width: 600px)").matches);

    useEffect(()=>{
        const checkDisplay = () => {
            setPhone(window.matchMedia("(max-width: 600px)").matches);
        }
        window.addEventListener('resize',checkDisplay);
        return ()=>{
            window.removeEventListener('resize',checkDisplay);
        };
    });

    if(!isPhone){
        return(
            <nav id="nav-footer">
                <div id="upper-footer">
                    <Logo id="logo" color='#ffffff' width="130" heigth="120" fontSize="40"/>
                    <a id="onde-estamos-footer" href='/sobre'>Onde Estamos</a>
                </div>
                <p id="direitos"><small>©2020 Todos os direitos reservados</small></p>
            </nav>
        );
    }else{
        return(
            <nav id="nav-footer">
                <div id="upper-footer">
                    <Logo id="logo" color='#ffffff' width="55" heigth="60" fontSize="23"/>
                    <a id="onde-estamos-footer" href='/sobre'>Onde Estamos</a>
                </div>
                <p id="direitos"><small>©2020 Todos os direitos reservados</small></p>
            </nav>
        );
    }
}

export default Footer;