import React from 'react';
import {useHistory} from 'react-router-dom';
import './blog_card.css';

/*
This component takes the following props:
- title: The title of the article
- link: The direct link to the article's page
- coverImage: A link to the article's cover image
- coverAlt: A string with alternative text describing the article's cover (accessibility)
*/

function BlogCard(props){
    const history = useHistory();

    return (
        <div className="bcard-container" onClick={()=>{history.push(props.link)}}>
            <img src={props.coverImage} alt={props.coverAlt}  className="bcard-cover"/>
            <h3 className="bcard-title">{props.title}</h3>
        </div>
    );
}

export default BlogCard;