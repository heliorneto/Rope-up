import React from 'react';
import './category.css';

/*
This component takes the following props:
- categoryID: The directus ID of the category
- name: The name of the category
- icon: A link to the category's icon
- iconAlt: A string with alternative text describing the category's icon (accessibility)
- description: The description of the category
*/

function Category(props){
    return (
        <div className="category-container">
            <img src={props.icon} alt={props.iconAlt}  className="category-image"/>
            <h3 className="category-title">{props.name}</h3>
            <h5 className="category-description">{props.description}</h5>
            <a href={`/blog/search/?q=&category=${props.categoryID}`} className="category-leia-mais">leia mais...</a>
        </div>
    );
}

export default Category;