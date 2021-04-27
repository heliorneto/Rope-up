import React from 'react';
import './search-bar.css'

/*
This component takes the following props:
- placeholder: The text present by default in the text box
- width: The width of the text box
- enterAction: A function to execute after pressing the enter key (receives the input value as parameter)
*/



function SearchBar(props){

    function searchKey(event){
        const input = document.getElementById('search-bar').value;
        if(event.key === "Enter"){
            props.enterAction(input);
        }
    }

    return(
            <input type="search" id="search-bar" placeholder={props.placeholder} style={{width:props.width}} onKeyDown= {searchKey}/>
    );
}

export default SearchBar;