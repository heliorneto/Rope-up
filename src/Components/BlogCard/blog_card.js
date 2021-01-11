import React from 'react';
import './blog_card.css';

/*
This component takes the following props:
- title: The title of the article
- link: The direct link to the article's page
- coverImage: A link to the article's cover image
- coverAlt: A string with alternative text describing the article's cover (accessibility)
*/

function BlogCard(props){
    return (
        <div className="bcard-container">
            <img src={props.coverImage} alt={props.coverAlt}  className="bcard-cover"/>
            <div className="bcard-content">
                <h3 className="bcard-title">{props.title}</h3>
                <a href={props.link} className="bcard-link">leia mais...</a>
            </div>
        </div>
    );
}

export default BlogCard;