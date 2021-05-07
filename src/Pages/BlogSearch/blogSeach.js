import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Header from "./../../Components/Header/header";
import Footer from "./../../Components/Footer/footer";
import Button from "./../../Components/Button/button";
import BlogCard from "./../../Components/BlogCard/blog_card";
import Gallery from "./../../Components/Gallery/gallery";
import {useMedia} from "./../../hooks/media_queries";
import "./blogSearch.css";

export default function BlogSearch(props){
    const articleRequestURL = "http://localhost:8055/items/article";
    const mediaRequestURL = "http://localhost:8055/assets/";
    const searchQuery = parseURL(props.location.search);
    const {isSmallPhone, isPhone} = useMedia();
    const [selectedCategories, setSelectedCategories] = useState("");
    const [categories, setCategories] = useState([]);
    const [searchedCategories, setSearchedCategories] = useState("");
    const [numResults, setNumResults] = useState(0);

    function parseURL(searchString){
        let vars = searchString.split('&');
        vars[0] = vars[0].substring(1);
        let res = {};
        for(const variable of vars){
            const nameVal = variable.split('=');
            res[decodeURIComponent(nameVal[0])] = decodeURIComponent(nameVal[1]);
        }
        return res;
    }

    function parseCategories(){
        const checkboxes = document.querySelectorAll(".category-check input");
        let selected = [];
        for(const checkbox of checkboxes){
            if(checkbox.checked){
                selected.push(checkbox.dataset.id);
            }
        }
        setSelectedCategories(selected.join(','));
    }

    async function getNumResults(){
        const query = parseURL(props.location.search);
        const params = (query.category)? {
            search: query.q,
            "filter[category][id][_in]": query.category,
            meta: "filter_count",
            fields: "id"
        }: {
            search: query.q,
            meta: "filter_count",
            fields: "id"
        };
        const response = await axios.get(articleRequestURL, {
            params: params
        });
        setNumResults(response.data.meta.filter_count);
        return response.data.meta.filter_count;
    }

    async function getResultPage({currentPage, numPageItems}){
        const query = parseURL(props.location.search);
        const params = (query.category)? {
            search: query.q,
            "filter[category][id][_in]": query.category,
            meta: "filter_count",
            fields: "id,title,cover.id,cover.description",
            limit: numPageItems,
            page: currentPage
        }: {
            search: query.q,
            meta: "filter_count",
            fields: "id,title,cover.id,cover.description",
            limit: numPageItems,
            page: currentPage
        };
        const response = await axios.get(articleRequestURL, {
            params: params
        });
        return response.data.data.map((item)=>{
            return <BlogCard
            key={item.id}
            title={item.title}
            link={"/blog/artigos/" + item.id}
            coverImage={mediaRequestURL + item.cover.id}
            coverAlt={item.cover.description}
            />
        });
    }

    useEffect(()=>{
        async function getCategories(){
            const response = await axios.get("http://localhost:8055/items/category/");
            let categories = [];
            for(const category of response.data.data){
                categories[category.id] = category.name;
            }
            const searched = (searchQuery.category)? searchQuery.category.split(','): [];
            let searchedString = "";
            if(searched.length !== 0){    
                for(let i = 0; i < searched.length - 1; i++){
                    searchedString += categories[searched[i]] + ", ";
                }
                searchedString += categories[searched[searched.length - 1]];
            }
            setSearchedCategories(searchedString);
            return response.data.data.map((item)=>(
                <div key={item.id} className="category-check">
                    <input type="checkbox" data-id={item.id}/>
                    <label>{item.name}</label>
                </div>
            ));
        }

        async function loadCategories(){
            setCategories(await getCategories());
        }
        
        loadCategories();
    },[searchQuery.category]);

    return (
        <div id="page-blog-search">
            <Header/>
                <div id="search-content">
                    <div id="search-header">
                        <h3>Resultados da busca por:</h3>
                        <h1>{searchQuery.q}</h1>
                        {(searchedCategories !== "")? <h2>Categorias: {searchedCategories}</h2>: null}
                    </div>
                    <div id="search-results">
                        <Gallery
                        rows={3}
                        columns={(isSmallPhone)? 2: ((isPhone)? 2: 3)}
                        cardSpacing={(isSmallPhone)? "6px": ((isPhone)? "20px": "40px")}
                        countItems={getNumResults}
                        getPageItems={getResultPage}
                        />
                    </div>
                    <form id="search-advanced" name="search-query" method="get" onChange={parseCategories}>
                        <p>Encontramos {numResults} posts</p>
                        <h2>Não encontrou o que procura?</h2>
                        <h3>Refine sua busca:</h3>
                        <div id="search-controls">
                            <div id="search-term"className="search-inputs">
                                <label>Termo de pesquisa: </label>
                                <input name="q" type="search" placeholder="Entre uma palavra..."/> 
                            </div>
                            <div className="search-inputs">
                                <label htmlFor="category">Selecione as categorias de artigos em que deseja procurar: </label>
                                <input name={(selectedCategories === "")? "": "category"} value={selectedCategories.split(",")} type="hidden"/>
                                <div id="search-categories">
                                    {categories}
                                </div>
                            </div>
                            <Button 
                            clickAction={()=>{}} 
                            backgroundColor="#D40F1C" 
                            text="Pesquisa avançada" 
                            textColor="white"
                            width="200px"
                            height="50px"
                            />
                        </div>
                    </form>
                </div>
            <Footer/>
        </div>
    );
}