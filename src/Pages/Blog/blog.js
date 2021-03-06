import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import MetaData from '../../meta/reactHelmet';
import Card from '../../Components/BlogCard/blog_card';
import Category from '../../Components/Category/category';
import TextBox from '../../Components/TextBox/textBox';
import Carrousel from '../../Components/Carrousel/carrousel';
import Gallery from '../../Components/Gallery/gallery';
import {Modal} from './../../Components/Modal/modal';
import Button from './../../Components/Button/button';
import SearchBar from './../../Components/SearchBar/search-bar'
import {useMedia} from "./../../hooks/media_queries";
import CMSConfig from "./../../cms_config";
import "./blog.css";

function Blog(){
    const categoriesRequestURL = `${CMSConfig.getFullURL()}/items/category/`;
    const articleRequestURL = `${CMSConfig.getFullURL()}/items/article`;
    const mediaRequestURL = `${CMSConfig.getFullURL()}/assets/`;
    const newsLetterSignURL = `${CMSConfig.getFullURL()}/items/mail_list`;
    const {isSmallPhone, isPhone, mediaLoaded} = useMedia();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [subStatus, setSubStatus] = useState({subscribed: false, success: false});
    const [featuredCategories, setFeaturedCategories] = useState([]);
    const [featuredArticles, setFeaturedArticles] = useState([]);
    const [mostRecent, setMostRecent] = useState([]);

    const meta = {
        titlePage: "Ropeup | Blog",
        titleSearch: "Ropeup | Blog",
        description: "Não queremos apenas propor uma solução através da tecnologia, queremos também espalhar conhecimento pelo mundo. Confira nosso blog e as maiores novidades no campo de inovação e tecnologia.",
        keyWords: "Ropeup | Blog | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    function openDialog() {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.right = "0px";
        document.body.style.left = "0px";
        document.body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
        document.querySelector('html').style.scrollBehavior = "auto";
        setDialogOpen(true);
    }

    function closeDialog() {
        document.body.style.overflowY = "";
        document.body.style.position = "";
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = "";
        document.body.style.right = "";
        document.body.style.right = "";
        document.querySelector('html').removeAttribute('style');
        if(!subStatus.success){
            setSubStatus({subscribed: false, success: false});
        }
        setDialogOpen(false);
    }

    function openSearch(query){
        const escaped = encodeURIComponent(query);
        window.location = `/blog/search?q=${escaped}`
    }

    async function getNumArticles(){
        const response = await axios.get(articleRequestURL, {
            params: {
                "meta": "total_count",
                "fields": "id"
            }
        });
        return response.data.meta.total_count;
    }

    async function getArticlePage({currentPage, numPageItems}){
        const response = await axios.get(articleRequestURL, {
            params: {
                "filter[status][_eq]": "published",
                fields: "id,title,cover.id,cover.description",
                sort: "-date_created",
                limit: numPageItems,
                page: currentPage
            }
        });
        const cardWidth = (isPhone)? 150: 200;
        return response.data.data.map((item)=>{
            return <Card 
            key={item.id} 
            title={item.title}
            link={"/blog/artigos/" + item.id}
            coverImage={mediaRequestURL + item.cover.id + `?fit=cover&width=${cardWidth}&height=160&withoutEnlargement`}
            coverAlt={item.cover.description}
            /> 
        });
    }

    
    async function submitNL() {
        const User = {
            name: document.getElementById("nameU").value,
            email: document.getElementById("emailU").value
        }
        try{
            await axios.post(newsLetterSignURL, User);
            setSubStatus({subscribed: true, success: true});
        }catch{
            setSubStatus({subscribed: true, success: false});
        }   
    }

    useEffect(()=>{
        async function getFeaturedCategories(){
            const response = await axios.get(categoriesRequestURL, {
                params: {
                    "filter[featured][_eq]": "true",
                    fields: "id,name,description,icon.id,icon.description",
                    limit: "4"
                }
            });
            return response.data.data.map((item)=>
            <Category
                key={item.id}
                categoryID={item.id}
                name={item.name}
                description={item.description}
                icon={mediaRequestURL + item.icon.id + "?fit=cover&width=60&height=60&withoutEnlargement"}
                iconAlt={item.icon.description}
            />);
        }
    
        async function getMostRecentArticles(){
            const response = await axios.get(articleRequestURL, {
                params: {
                    sort: "-date_created",
                    limit: "3",
                    fields : "id,title,cover.id,cover.description"
                }
            });
            return response.data.data.map((item)=>{
                return <Card
                key={item.id}
                title={item.title}
                link={"/blog/artigos/" + item.id}
                coverImage={mediaRequestURL + item.cover.id}
                coverAlt={item.cover.description}
                />
            });
        }
    
        async function getFeaturedArticles(){
            const response = await axios.get(articleRequestURL, {
                params: {
                    "filter[status][_eq]": "published",
                    "filter[featured][_eq]": "true",
                    fields: "id,title,cover.id,cover.description"
                }
            });
            return response.data.data.map((item)=>{
                return <Card 
                key={item.id} 
                title={item.title}
                link={"/blog/artigos/" + item.id} 
                coverImage={mediaRequestURL + item.cover.id} 
                coverAlt={item.cover.description}
                />
            });
        }

        async function loadFeaturedCategories(){
            setFeaturedCategories(await getFeaturedCategories());
        }

        async function loadMostRecent(){
            setMostRecent(await getMostRecentArticles());
        }

        async function loadFeaturedArticles(){
            setFeaturedArticles(await getFeaturedArticles());
        }

        loadFeaturedCategories();
        loadMostRecent();
        loadFeaturedArticles();
    },[articleRequestURL, categoriesRequestURL, mediaRequestURL]);

    let dialogContent;

    if(!subStatus.subscribed){
        dialogContent = (
            <div id="dialog-content">
                <label className="dialog-label" htmlFor="Name">Nome:</label>
                <input id="nameU" className="dialog-input" name="Name" type="text" required/>
                <label className="dialog-label" htmlFor="Email">Email:</label>
                <input id="emailU" className="dialog-input" name="Email" type="email" required/>
            </div>
        );
    }else if(subStatus.success){
        dialogContent = (
            <div id="dialog-content" className="dialog-info">
                <img src="/Imagens/icons/Success.png" alt="Sucesso!"/>
                <p>A inscrição foi concluída com sucesso!</p>
            </div>
        );
    }else{
        dialogContent = (
            <div id="dialog-content" className="dialog-info">
                <img src="/Imagens/icons/Error.png" alt="Ocorreu um erro!"/>
                <p>Ops!</p>
                <p>Ocorreu um erro ao realizar a sua inscrição!</p>
                <p>Por favor, tente novamente.</p>
            </div>
        );
    }

    return(
        <div id="page-blog">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header selectedPage="blog"/>
            <div id="blog-general">
                <div id="line5">
                    <div id="text1-blog" >
                        <div id="text3">
                            <h2>Publicações sobre gestão e desenvolvimento</h2>
                            <h3>Porque nos movemos pelo conhecimento</h3>
                        </div>
                    </div>
                    <div id="image-top-blog">
                        <img src="/Imagens/1.png" alt="image1-blog"/>
                        <SearchBar placeholder="Sobre o que quer aprender?" width={(isPhone)? "90%": "300px"} enterAction={openSearch}/>
                    </div>
                </div>
                <div id="contents-container">
                    <div id="contents">
                        <div id="contents-top">
                            {featuredCategories[0]}
                        </div>
                        <div id="contents-middle">
                            {featuredCategories.slice(1,3)}
                        </div>
                        <div id="contents-bottom">
                            {featuredCategories[3]}
                            <div className="category-button">
                                <Button 
                                text="Veja todos os conteúdos" 
                                width="200px" 
                                height="65px" 
                                backgroundColor="#D40F1C" 
                                textColor='white' 
                                clickAction={()=>{window.location = "/blog/search#search-categories"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="title">
                        <h3 style={{fontSize: '32px'}}>Em destaque</h3>
                    </div>
                    <div id="carrousel">
                        {
                            mediaLoaded && <Carrousel> 
                                {featuredArticles}
                            </Carrousel>
                        }
                    </div>
                </div>
                <div>
                    <div id="title2">
                        <h3 style={{fontSize: '32px'}}>Mais recentes</h3>
                    </div>    
                    <div id="line-blog">
                        <div id="left-blog">
                            <img src="/Imagens/10.png" alt="image1-blog"/>
                        </div>
                        <div id="right-blog">
                            {mostRecent} 
                        </div>
                    </div>
                </div>
                <div id="line3">
                    <Gallery 
                    rows={(isPhone)? 2: 3} 
                    columns={(isPhone)? 2: 3} 
                    cardSpacing={(isSmallPhone)? "6px": ((isPhone)? "20px": "40px")}
                    countItems={getNumArticles}
                    getPageItems={getArticlePage}
                    />
                </div>
                <div id="image-bottom-blog">
                    <div id="tb">
                        <TextBox 
                        color="#D40F1C"
                        text="Assine nossa newsletter e fique por dentro de conteúdos de gestão e tecnologia" 
                        btnAction={openDialog}
                        />
                    </div>
                    <div id="final-image-blog">
                        <img src="/Imagens/9.png" alt="image1-blog"/>
                    </div>
                </div>
            </div>
            {dialogOpen &&
                <Modal closeFunction={closeDialog}>
                    <div id="dialog-container">
                        <h4 id="dialog-title">Digite seu nome e email abaixo para começar a receber nossos conteúdos exclusivos:</h4>
                       {dialogContent}
                        <div id="dialog-confirm">
                            <Button
                            clickAction={(subStatus.subscribed)? closeDialog: ()=>submitNL()}
                            text={(subStatus.subscribed)? "Ok": "Inscrever-se"}
                            width="140px"
                            height="40px"
                            backgroundColor="#D40F1C"
                            textColor="#fff"
                            />
                        </div>
                    </div>
                </Modal>
            }
            <Footer/>
        </div>
    );
}

export default Blog;
