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
                coverImage: {
                    altText: '', 
                    sources: [],
                    sizes: []
                },
                contentMD: '',
                author: {
                    name: '',
                    photoSrc: ''
                },
                datePublished: null,
                dateLastEdited: null
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
            articleData.coverImage.altText = response.data.Capa.alternativeText;
            articleData.coverImage.sources = [response.data.Capa.formats.small.url, response.data.Capa.formats.medium.url, response.data.Capa.formats.large.url];
            articleData.coverImage.sizes = [response.data.Capa.formats.small.width, response.data.Capa.formats.medium.width, response.data.Capa.formats.large.width];
            articleData.contentMD = response.data.Conteudo;
            articleData.author.name = response.data.Autor.Nome;
            articleData.author.profilePicSrc = response.data.Autor.Foto.url;
            const pubDate = new Date(response.data.created_at);
            const editDate = new Date(response.data.updated_at);
            articleData.datePublished = pubDate.toLocaleDateString();
            if(articleData.datePublished !== editDate.toLocaleDateString()){
                articleData.dateLastEdited = editDate.toLocaleDateString();
            }
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
                    <header className="article-header">
                        <div className="decorate-circle"/>
                        <img 
                        src={this.props.baseMediaUrl + this.state.articleData.coverImage.sources[1]}
                        srcSet={this.state.articleData.coverImage.sources.map((item,index)=> this.props.baseMediaUrl + item + ' ' + this.state.articleData.coverImage.sizes[index] + 'w, ')}
                        alt={this.state.articleData.coverImage.altText} 
                        className="article-cover"/>
                        <hr/>
                        <h1>{this.state.articleData.title}</h1>
                    </header>
                    <div className="article-body">
                        <div className="article-content">
                            <ReactMarkdown 
                            plugins={[gmf]} 
                            allowDangerousHtml={true}
                            transformImageUri={(url)=> this.props.baseMediaUrl + url}
                            >
                                {this.state.articleData.contentMD}
                            </ReactMarkdown>
                        </div>
                        <aside className="article-info">
                            <img src={this.props.baseMediaUrl + this.state.articleData.author.profilePicSrc} alt="Foto do autor" className="author-photo"/>
                            <p>Por: {this.state.articleData.author.name}</p>
                            <p>Publicado em: {this.state.articleData.datePublished}</p>
                            {(this.state.articleData.dateLastEdited) && <p>Editado em: {this.state.articleData.dateLastEdited}</p>}
                        </aside>
                        <aside className="other-articles">
                            {/* 
                            //TODO: add the article cards in here
                            */}
                        </aside>
                    </div>
                </article>
            );
        }else if(this.state.requested && this.state.error){    
            return (
                <article className="article-container">
                    <h1>{this.state.error}</h1>
                </article>
            );
        }else{      
            return (
                <article className="article-container">
                    <h1>{this.state.error}</h1>
                </article>
            );
        }
    }
}

export default Article;