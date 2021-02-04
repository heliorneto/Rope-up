import React from 'react';
import axios from 'axios';
import './article.css';

/*
    This component is used to render the article main contents.
    It receives the following props:
    - baseServerUrl: the base URL from where to request the article
    - articleID: the id of the article to recover from the server
*/

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <article className="article-container">

            </article>
        );
    }
}

export default Article;