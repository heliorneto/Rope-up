import React from 'react';
import './carrousel.css';

/*

*/

class Carrousel extends React.Component{
    constructor(props){
        super(props);
        this.numPages = Math.ceil(props.children.length/3);
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
        const begin = (this.state.currentPage - 1) * 3;
        const slicedItems = this.props.children.slice(begin,begin + 3);
        const pbegin = (this.state.previousPage - 1) * 3;
        const previrousItems = this.props.children.slice(pbegin,pbegin + 3);
        return (
            <div className="carrousel-container">
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