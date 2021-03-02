import React from 'react';
import './search-bar.css'

/*
This component takes the following props:
- placeholder: The text present by default in the text box
- width: The width of the text box
*/



function SearchBar(props){
    return(
            <input type="search" id="search" placeholder={props.placeholder} style={{width:props.width}}/>
    );
}

export default SearchBar;