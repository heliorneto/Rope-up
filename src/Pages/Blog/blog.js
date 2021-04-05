import {React, useState, useEffect} from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import MetaData from '../../meta/reactHelmet';
import "./blog.css";
import Card from '../../Components/BlogCard/blog_card';
import TextBox from '../../Components/TextBox/textBox';
import Carrousel from '../../Components/Carrousel/carrousel';

function Blog(){
    const [isPhone, setPhone] = useState(window.matchMedia("(max-width: 600px), (max-height: 600px) and (orientation: landscape)").matches);
    const [maxWidth, setMaxWidth] = useState(isPhone? 100: 80);

    const meta = {
        titlePage: "Ropeup | Blog",
        titleSearch: "Ropeup | Blog",
        description: "Não queremos apenas propor uma solução através da tecnologia, queremos também espalhar conhecimento pelo mundo. Confira nosso blog e as maiores novidades no campo de inovação e tecnologia.",
        keyWords: "Ropeup | Blog | tecnologia",
        imageUrl: "",
        imageAlt: "",
    }

    useEffect(()=>{
        const checkDisplay = () =>{
            setPhone(window.matchMedia("(max-width: 600px), (max-height: 200px) and (orientation: landscape)").matches);
            setMaxWidth(isPhone? 100: 80);
        }

        window.addEventListener('resize',checkDisplay);
        return () => {
            window.removeEventListener('resize',checkDisplay);
        }

    },[isPhone,setMaxWidth]);

    return(
        <div id="page-blog">
            <MetaData titlePage={meta.titlePage} titleSearch={meta.titleSearch} description={meta.description} keyWords={meta.keyWords} imageUrl={meta.imageUrl} imageAlt={meta.imageAlt} />
            <Header selectedPage="blog"/>
            <div id="blog-general">
                <div id="line5">
                    <div id="text1-blog" >
                        <div id="text3">
                            <h2 style={{fontSize: 49}}>Publicações sobre gestão e desenvolvimento</h2>
                            <h3 style={{fontSize: 28}}>Porque nos movemos pelo conhecimento</h3>
                        </div>
                    </div>
                    <div id="image-top-blog">
                        <img src="/Imagens/1.png" alt="image1-blog" style={{width: "40vw", paddingTop:"10vh"}}></img>
                    </div>
                </div>
                <div>
                    <div id="components">
                        <div id="midle1">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div>
                            <div className="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <div id="midle3">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                        </div>
                        <div id="midle4">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            <div id="midle5">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="title">
                        <h3 style={{fontSize: '32px'}}>Mais Lidas</h3>
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
                            <img src="/Imagens/8.png" alt="image1-blog" style={{width:"40vw", paddingTop:"10vh"}}></img>
                        </div>
                        <div id="right">
                            <div className="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <div className="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                            <div className="midle2">
                                <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line3">
                    <div className="components2">
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                    </div>
                </div>
                <div className="line3">
                    <div className="components2">
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                        <div className="midle2">
                            <Card title="Finanças" link="" coverImage="" coverAlt="Para quem busca organizar suas cartas"/>
                        </div>
                    </div>
                </div>
                <div id="line4">
                    <div id="image-bottom-blog">
                        <div id="tb">
                            <TextBox color="#D40F1C"></TextBox>
                        </div>
                        <div id="final-image-blog">
                            <img src="/Imagens/9.png" alt="image1-blog" style={{width:"45vw", paddingTop:"2vh"}}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
