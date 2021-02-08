import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import gmf from 'remark-gfm';
import './article.css';

/*
    This component is used to render the article main contents.
    It receives the following props:
    - baseServerUrl: the base URL from where to request the article
    - baseMediaUrl: the base URL for the media requests
    - articleID: the id of the article to recover from the server
*/

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            requested: false,
            error: false,
            articleData: {
                title: '',
                coverImage: '',
                contentMD: '',
                author: '',
                datePublished: '',
                dateLastEdited: ''
            },
            errorInfo: {
                code: 0,
                description: '',
                message: ''
            }
        };
        this.webInterface = axios.create({
            baseURL: this.props.baseServerUrl,
            method: 'GET',
            timeout: 2000,
            responseType: 'json'
        });
    }

    async componentDidMount(){
        try{
            let articleData = this.state.articleData;
            const response = await this.webInterface.get(`${this.props.articleID}`);
            articleData.title = response.data.Titulo;
            articleData.contentMD = response.data.Conteudo;
            articleData.author = response.data.Autor;
            articleData.datePublished = response.data.created_at;
            articleData.dateLastEdited = (response.data.updated_at === articleData.datePublished)? '': response.data.updated_at;
            this.setState({
                requested: true,
                error: false,
                articleData: articleData,
                errorInfo: this.state.errorInfo
            });
        }catch(error){
            let errorInfo = this.state.errorInfo;
            if(error.response){
                errorInfo.code = error.response.status;
                errorInfo.message = error.response.data;
                errorInfo.description = "O servidor retornou um erro ao processar a requisição!";

            }else if(error.request){
                errorInfo.code = 1;
                errorInfo.message = "Our servers could not be reached, probably due to a network error";
                errorInfo.description = "Uma requisição foi enviada ao servidor, mas uma resposta não foi recebida!";
            }else{  
                errorInfo.message = "Something happened in setting up the request that triggered an error";
                errorInfo.description = "Ocorreu um erro ao gerar a requisição para o artigo solicitado!";                  
            }
            this.setState({
                requested: true,
                error: true,
                articleData: this.state.articleData,
                errorInfo: errorInfo
            });
            console.log("Error during article load!");
        }
    }

    render(){
        if(this.state.requested && !(this.state.error)){    
            //!Check if it is ok to allowHTML (security)
            return (
                <article className="article-container">
                    <h1>{this.state.articleData.title}</h1>
                    <ReactMarkdown 
                    plugins={[gmf]} 
                    allowDangerousHtml={true}
                    transformImageUri={(url)=> this.props.baseMediaUrl + url}
                    >
                        {this.state.articleData.contentMD}
                    </ReactMarkdown>
                    <footer className="article-info">
                        <p>Autor: {this.state.articleData.author}</p>
                        <p>Publicado em: {this.state.articleData.datePublished}</p>
                        {(this.state.articleData.dateLastEdited !== '') && <p>Editado em: {this.state.articleData.dateLastEdited}</p>}
                    </footer>
                </article>
            );
        }else if(this.state.requested && this.state.error){    
            return (
                <article className="article-container">
                </article>
            );
        }else{      
            return (
                <article className="article-container">
                </article>
            );
        }
    }
}

export default Article;