import React from 'react';
import {useHistory} from 'react-router-dom';
import './category.css';

/*
This component takes the following props:
- title: The title of the article
- link: The direct link to the article's page
- coverImage: A link to the article's cover image
- coverAlt: A string with alternative text describing the article's cover (accessibility)
- description: The description of the article

*/

function Category(props){
    const history = useHistory();

    return (
        <div className="category-container" onClick={()=>{history.push(props.link)}}>
            <img src={props.coverImage} alt={props.coverAlt}  className="category-cover"/>
            <h3 className="category-title">{props.title}</h3>
            <h5 className="category-description">{props.description}</h5>
            <h5 className="category-leia-mais">{props.leiaMais}</h5>
        </div>
    );
}

export default Category;