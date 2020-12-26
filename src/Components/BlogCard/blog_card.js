import React from 'react';
import './blog_card.css';

function BlogCard(props){
    return (
        <div className="bcard-container">
            <div className="bcard-mask"/>
            <img src={props.coverImage} alt={props.coverAlt}  className="bcard-cover"/>
            <div className="bcard-content">
                <h3 className="bcard-title">{props.title}</h3>
                <a href={props.link} className="bcard-link">leia mais...</a>
            </div>
        </div>
    );
}

export default BlogCard;