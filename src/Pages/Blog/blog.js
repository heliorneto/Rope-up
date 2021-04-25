import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import MetaData from '../../meta/reactHelmet';
import Card from '../../Components/BlogCard/blog_card';
import TextBox from '../../Components/TextBox/textBox';
import Carrousel from '../../Components/Carrousel/carrousel';
import Gallery from '../../Components/Gallery/gallery';
import {Modal} from './../../Components/Modal/modal';
import Button from './../../Components/Button/button';
import "./blog.css";

function Blog(){
    const [isPhone, setPhone] = useState(window.matchMedia("(max-width: 800px)").matches);
    const [extraSmallPhone, setExtraSmallPhone] = useState(window.matchMedia("(max-width: 280px)").matches);
    const [maxWidth, setMaxWidth] = useState(isPhone? 100: 80);
    const [dialogOpen, setDialogOpen] = useState(false);

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
        setDialogOpen(false);
    }

    async function getNumArticles(){
        const response = await axios.get("http://localhost:8055/items/article", {
            params: {
                "meta": "total_count",
                "fields": "id"
            }
        });
        return response.data.meta.total_count;
    }

    async function getArticlePage({currentPage, numPageItems}){
        const response = await axios.get("http://localhost:8055/items/article", {
            params: {
                "filter[status][_eq]": "published",
                fields: "id,title,cover.id,cover.description",
                sort: "-date_created",
                limit: numPageItems,
                page: currentPage
            }
        });
        return response.data.data.map((item)=>{
            return <Card 
            key={item.id} 
            title={item.title}
            link={"http://localhost:8055/items/article/" + item.id}
            coverImage={"http://localhost:8055/assets/" + item.cover.id}
            coverAlt={item.cover.description}
            /> 
        });
    }

    useEffect(()=>{
        const checkDisplay = () =>{
            setPhone(window.matchMedia("(max-width: 800px)").matches);
            setExtraSmallPhone(window.matchMedia("(max-width: 280px)").matches);
            setMaxWidth(isPhone? 100: 80);
        }

        window.addEventListener('resize',checkDisplay);
        return () => {
            window.removeEventListener('resize',checkDisplay);
        }

    },[isPhone]);

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
                    </div>
                </div>
                <div id="contents-container">
                    <div id="contents">
                        <div id="contents-top">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="contents-middle">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div id="contents-bottom">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="title">
                        <h3 style={{fontSize: '32px'}}>Em destaque</h3>
                    </div>
                    <div id="carrousel">
                        <Carrousel maxWidth={maxWidth} mobile={isPhone}> 
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                            <Card title="Finanças" link="" coverImage="Imagens/Capa1.jpeg" coverAlt="Para quem busca organizar suas cartas"/>
                        </Carrousel>
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
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <div className="middle-card">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                    </div>
                </div>
                <div id="line3">
                    <Gallery 
                    rows={(isPhone)? 2: 3} 
                    columns={(isPhone)? ((extraSmallPhone)? 1: 2): 3} 
                    cardSpacing={(isPhone)? "20px": "40px"}
                    countItems={getNumArticles}
                    getPageItems={getArticlePage}
                    />
                </div>
                <div id="line4">
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
            </div>
            {dialogOpen &&
                <Modal closeFunction={closeDialog}>
                    <div id="dialog-container">
                        <h4 id="dialog-title">Digite seu nome e email abaixo para começar a receber nossos conteúdos exclusivos:</h4>
                        <label className="dialog-label" htmlFor="Name">Nome:</label>
                        <input className="dialog-input" name="Name" type="text" required/>
                        <label className="dialog-label" htmlFor="Email">Email:</label>
                        <input className="dialog-input" name="Email" type="text" required/>
                        <div id="dialog-confirm">
                            <Button
                            clickAction={()=>0}
                            text="Ok"
                            width="120px"
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
