import React from 'react';
import './carrousel.css';

/*

*/

class BlogCollection extends React.Component{
    constructor(props){
        super(props);
        this.numPages = Math.ceil(props.children.length/3);
        this.state = {
            currentPage: 1,
            animate: false //Variable to control the carrousel slide animation
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.genPageIndex = this.genPageIndex.bind(this);
    }

    nextPage(){
        let newPage = this.state.currentPage + 1;
        if(newPage > this.numPages){
            newPage = 1;
        }
        this.setState({currentPage: newPage, animate: true});
    }

    previousPage(){
        let newPage = this.state.currentPage - 1;
        if(newPage <= 0){
            newPage = this.numPages;
        }
        this.setState({currentPage: newPage, animate: true});
    }

    genPageIndex(){
        const pageRange = [...Array(this.numPages).keys()].map((i)=>i+1);
        return pageRange;
    }

    render(){
        const begin = (this.state.currentPage - 1) * 3;
        const end = begin + 3;
        const slicedItems = this.props.children.slice(begin,end);
        return (
            <div className="carrousel-container">
                <button className="carrousel-next" onClick={()=>this.previousPage()}/>
                <div className="carrousel-items">
                    {slicedItems}
                </div>
                {(this.state.animate)? <div className="carrousel-animator-duplicate">{slicedItems}</div>: null}
                <button className="carrousel-previous" onClick={()=>this.nextPage()}/>
            </div>
        );
    }
}

export default BlogCollection;