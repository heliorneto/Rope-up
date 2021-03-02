import React from 'react';
import './carrousel.css';

/*
    This component renders the child items (passed inside the tag as
    props.children) in the form of a carrousel. It also receives the
    following props:
    - numItems: sets the number of items (cards) that will appear per page
    - width: controls the component container's line width
*/

class Carrousel extends React.Component{
    constructor(props){
        super(props);
        this.numPages = Math.ceil(props.children.length/props.numItems);
        this.animationDuration = 750; // Animation duration in milliseconds
        this.state = {
            currentPage: 1,
            previousPage: 1,
            animationDirection: null //Controls the direction of the carrousel animation
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    nextPage(){
        const previousPage = this.state.currentPage;
        let newPage = previousPage + 1;
        if(newPage > this.numPages){
            newPage = 1;
        }
        this.setState({
            currentPage: newPage,
            previousPage: previousPage,
            animationDirection: "right"
        });
        setTimeout(()=>this.setState({
            currentPage: this.state.currentPage,
            previousPage: this.state.currentPage, 
            animationDirection: null
        }), this.animationDuration - 20);
    }

    previousPage(){
        const previrousPage = this.state.currentPage;
        let newPage = previrousPage - 1;
        if(newPage <= 0){
            newPage = this.numPages;
        }
        this.setState({
            currentPage: newPage,
            previousPage: previrousPage,
            animationDirection: "left"
        });
        setTimeout(()=>this.setState({
            currentPage: this.state.currentPage,
            previousPage: this.state.currentPage,
            animationDirection: null
        }), this.animationDuration - 20);
    }

    render(){
        const begin = (this.state.currentPage - 1) * this.props.numItems;
        const slicedItems = this.props.children.slice(begin,begin + this.props.numItems);
        const pbegin = (this.state.previousPage - 1) * this.props.numItems;
        const previrousItems = this.props.children.slice(pbegin,pbegin + this.props.numItems);
        return (
            <div className="carrousel-container" style={{width: this.props.width}}>
                <button className="carrousel-next" onClick={()=>this.previousPage()}/>
                <div className="carrousel-items">
                    {slicedItems}
                </div>
                {
                    (this.state.animationDirection) && (
                    <div className={`carrousel-animator-duplicate carrousel-slide-${this.state.animationDirection}`}>
                        {previrousItems}
                    </div>)
                }
                <button className="carrousel-previous" onClick={()=>this.nextPage()}/>
            </div>
        );
    }
}

export default Carrousel;