import React from 'react';
import Header from './../../Components/Header/header';
import Footer from './../../Components/Footer/footer';
import Article from './../../Components/Article/article';
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
                    <Article baseServerUrl="http://localhost:1337/artigos" baseMediaUrl="http://localhost:1337" articleID={this.props.match.params.id}/>
                <Footer/>
            </div>
        );
    }
}

export default Artigos;