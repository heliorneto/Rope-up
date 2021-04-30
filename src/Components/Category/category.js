import React from 'react';
import {useHistory} from 'react-router-dom';
import './category.css';

/*
This component takes the following props:
- title: The title of the category
- link: The direct link to the category's page
- topImage: A link to the category's top image
- coverAlt: A string with alternative text describing the category's cover (accessibility)
- description: The description of the category
- leiaMais: A space in case the category contains a "leia mais..."

*/

function Category(props){
    const history = useHistory();

    return (
        <div className="category-container" onClick={()=>{history.push(props.link)}}>
            <img src={props.topImage} alt={props.coverAlt}  className="category-image"/>
            <h3 className="category-title">{props.title}</h3>
            <h5 className="category-description">{props.description}</h5>
            <h5 className="category-leia-mais">{props.leiaMais}</h5>
        </div>
    );
}

export default Category;