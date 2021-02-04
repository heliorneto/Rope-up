import React from 'react';
import Header from './../../Components/Header/header';
import Footer from './../../Components/Footer/footer';
import './artigos.css';

class Artigos extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div id="page-artigos">
                <Header/>
                <div id="artigos-main">
                    <p>Artigo selecionado: {this.props.match.params.id}</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Artigos;