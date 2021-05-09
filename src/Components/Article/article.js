import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import gmf from 'remark-gfm';
import BlogCard from './../../Components/BlogCard/blog_card';
import Button from "./../../Components/Button/button";
import {MediaContext} from './../../hooks/media_queries';
import MetaData from '../../meta/reactHelmet';
import './article.css';

/*
    This component is used to render the article main contents.
    It receives the following props:
    - baseItemsUrl: the base Directus server URL from where to request the items (articles)
    - baseMediaUrl: the base Directus server URL where to request the media (such as images and videos)
    - articleID: the id of the article to recover from the server
*/

class Article extends React.Component{
    static contextType = MediaContext;

    constructor(props){
        super(props);
        this.state = {
            requested: false,
            error: false,
            articleData: {
                title: '',
                coverImage: {
                    id: '',
                    description: ''
                },
                content: '',
                authorInfo: {
                    name: '',
                    avatarID: ''
                },
                datePublished: null,
                dateLastEdited: null,
                meta: {
                    titlePage: 'Ropeup',
                    titleSearch: 'Ropeup',
                    keywords: [],
                    description: ''
                },
                recommended: []
            },
            errorInfo: {
                code: 0,
                description: '',
                message: ''
            }
        };
        this.webInterface = axios.create({
            baseURL: this.props.baseItemsUrl,
            method: 'GET',
            timeout: 2000,
            responseType: 'json'
        });
    }

    async componentDidMount(){
        try{
            let articleData = this.state.articleData;
            const response = await this.webInterface.get(`${this.props.articleID}`,{
                params: {
                    fields: '*,user_created.*,cover.id,cover.description,recommended.article_related_id'
                }
            });
            const responseData = response.data;
            articleData.title = responseData.data.title;
            articleData.coverImage.id = responseData.data.cover.id;
            articleData.coverImage.description = responseData.data.description;
            articleData.content = responseData.data.content;
            articleData.authorInfo.name = responseData.data.user_created.first_name + ' ' + responseData.data.user_created.last_name;
            articleData.authorInfo.avatarID = responseData.data.user_created.avatar;
            articleData.datePublished = new Date(responseData.data.date_created);
            if(responseData.data.date_updated)
                articleData.dateLastEdited = new Date(responseData.data.date_updated);
            articleData.meta.titlePage = responseData.data.title;
            articleData.meta.titleSearch = responseData.data.title;
            articleData.meta.keywords = responseData.data.keywords;
            articleData.meta.description = responseData.data.description;
            const recommendedIDs = responseData.data.recommended.map((item)=>item.article_related_id);
            const recommendedCards = await this.webInterface.get("",{
                params: {
                    "filter[id][_in]": recommendedIDs.toString(),
                    fields: "id,title,cover.id,cover.description"
                }
            });
            articleData.recommended = recommendedCards.data.data.map((item)=><BlogCard
                key={item.id}
                title={item.title}
                link={`/blog/artigos/${item.id}`}
                coverImage={this.props.baseMediaUrl + '/' + item.cover.id}
                coverAlt={item.cover.description}
            />);
            this.setState({
                requested: true,
                error: false,
                articleData: articleData,
                errorInfo: null
            });
        }catch(error){
            let errorInfo = this.state.errorInfo;
            if(error.response){
                errorInfo.code = error.response.status;
                errorInfo.message = error.statusText;
                errorInfo.description = "O servidor retornou um erro ao processar a requisição!";

            }else if(error.request){
                errorInfo.code = 1;
                errorInfo.message = "Our servers could not be reached, probably due to a network error.";
                errorInfo.description = "Uma requisição foi enviada ao servidor, mas uma resposta não foi recebida!";
            }else{  
                errorInfo.message = "Something happened in setting up the request that triggered an error.";
                errorInfo.description = "Ocorreu um erro ao gerar a requisição para o artigo solicitado!";                  
            }
            this.setState({
                requested: true,
                error: true,
                articleData: null,
                errorInfo: errorInfo
            });
            console.error("An error occurred while loading article data!\n", error);
        }
    }

    render(){
        if(this.state.requested && !(this.state.error)){    
            return (
                <article className="article-container">
                    <MetaData titlePage={this.state.articleData.meta.titlePage} titleSearch={this.state.articleData.meta.titleSearch} description={this.state.articleData.meta.description} keyWords={this.state.articleData.meta.keywords} imageUrl="" imageAlt=""/>
                    <header className="article-header">
                        <div className="decorate-circle"/>
                        <img 
                        src={this.props.baseMediaUrl + '/' + this.state.articleData.coverImage.id}
                        alt={this.state.articleData.coverImage.description} 
                        className="article-cover"/>
                        <hr/>
                        <h1>{this.state.articleData.title}</h1>
                    </header>
                    <div className="article-body">
                        <div className="article-content">
                            <ReactMarkdown plugins={[gmf]}>
                                {this.state.articleData.content}
                            </ReactMarkdown>
                        </div>
                        <div className="article-sidebar">
                            <aside className="article-info">
                                <img src={this.props.baseMediaUrl + '/' + this.state.articleData.authorInfo.avatarID} alt="Foto do autor" className="author-photo"/>
                                <div className="article-info-text">
                                    <p>Por: {this.state.articleData.authorInfo.name}</p>
                                    <p>Publicado em: {this.state.articleData.datePublished.toLocaleDateString()}</p>
                                    {(this.state.articleData.dateLastEdited) && <p>Atualizado em: {this.state.articleData.dateLastEdited.toLocaleDateString()}</p>}
                                </div>
                            </aside>
                            {!this.context.isPhone && <aside className="recommended-articles">
                                <h4>Artigos recomendados:</h4>
                                {this.state.articleData.recommended}
                            </aside>}
                        </div>
                    </div>
                    {this.context.isPhone && <aside className="recommended-articles-mobile">
                            <h4>Artigos recomendados:</h4>
                            {this.state.articleData.recommended}
                    </aside>}
                    <div className="CTA">
                    <img src="/Imagens/CTA.png" alt="CTA" className="CTA-image"/>
                    <div className="CTA-button">
                        <h3>Coloque em prática essas dicas com nosso <br/> serviço de consultoria em tecnologia</h3>
                        <Button 
                            text="Conheça como trabalhamos"
                            clickAction={()=>{window.location = "/contato"}}
                            width={(this.context.isSmallPhone)? "150px": ((this.context.isPhone)? "180px": "200px")}
                            height={(this.context.isSmallPhone)? "55px": ("65px")}
                            backgroundColor="#D40F1C" 
                            textColor='white'  
                        />
                    </div>
                </div>
                </article>
            );
        }else if(this.state.requested && this.state.error){    
            return (
                <article className="article-container">
                    <img src="/Imagens/Error-Image.png" alt="Lamentamos, mas ocorreu um erro! Ele é temporário! Tente novamente mais tarde ou entre em contato conosco." className="error-image"/>
                    <details className="error-info">
                        <summary>Mais informações:</summary>
                        <div className="error-info-details">
                            <p>Código do erro: {this.state.errorInfo.code}</p>
                            <p>Descrição: {this.state.errorInfo.description}</p>
                        </div>
                
                    </details>
                </article>
            );
        }else{      
            return (
                <article className="article-container">
                    <div className="article-loader"/>
                </article>
            );
        }
    }
}

export default Article;