import React from 'react';
import './search-bar.css'

/*
This component takes the following props:
- placeholder: The text present by default in the text box
- width: The width of the text box
*/



function SearchBar(props){

    function searchKey(){
        document.getElementById("search").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                alert("You pressed a key inside the input field");
                
            }
          });
    }

    return(
            <input type="search" id="search" placeholder={props.placeholder} style={{width:props.width}} onKeyDown= {()=>searchKey()}/>
    );
}

export default SearchBar;