import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import "./blog.css";

function Blog(){
    return(
        <div id="page-blog">
            <Header/>
            <div id="blog-general">
                <div id="line">
                    <div id="text1-blog">
                        <h1></h1>
                        <h3></h3>
                    </div>
                    <div id="image-top-blog">
                        <img src="" alt="image1-blog"></img>
                    </div>
                </div>
                <div id="column">
                    <div id="components">

                    </div>
                    <div id="button-blog">
                        <Button width="200px" color="#D40F1C" label="Veja todos os assuntos"/>
                    </div>
                </div>
                <div id="column">
                    <h3></h3>
                    <div id="carousel">

                    </div>
                </div>
                <div id="column">
                    <h3></h3>
                    <div id="line">
                        <div id="left">
                        
                        </div>
                        <div id="right">

                        </div>
                    </div>
                </div>
                <div id="line">
                    <div id="components2">

                    </div>
                </div>
                <div id="line">
                    <div id="image-bottom-blog">
                        <img src="" alt="image2-blog"></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
