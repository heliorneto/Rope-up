import React from 'react';
import './carrousel.css';
import {MediaContext} from "./../../hooks/media_queries";

/*
    This component renders the child items (passed inside the tag as
    props.children) in the form of a carrousel. 
*/

class Carrousel extends React.Component{
    static contextType = MediaContext;

    constructor(props){
        super(props);
        this.animationDuration = 750; // Sets the slide animation duration in milliseconds
        this.x0 = null; // Class variable used in the touch slide implementation (stores first touch x coordinate)
        this.state = {
            numCards: 3,
            width: 600,
            numPages: 1,
            currentPage: 1,
            previousPage: 1,
            animationDirection: null //Controls the direction of the carrousel animation
        };
        // Extra class methods biding
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.resize = this.resize.bind(this);
        this.lock = this.lock.bind(this);
        this.move = this.move.bind(this);
    }

    nextPage(){
        const previousPage = this.state.currentPage;
        let newPage = previousPage + 1;
        if(newPage > this.state.numPages){
            newPage = 1;
        }
        this.setState({
            numCards: this.state.numCards,
            width: this.state.width,
            numPages: this.state.numPages,
            currentPage: newPage,
            previousPage: previousPage,
            animationDirection: "right"
        });
        setTimeout(()=>this.setState({
            numCards: this.state.numCards,
            width: this.state.width,
            numPages: this.state.numPages,
            currentPage: this.state.currentPage,
            previousPage: this.state.previousPage, 
            animationDirection: null
        }), this.animationDuration - 20);
    }

    previousPage(){
        const previousPage = this.state.currentPage;
        let newPage = previousPage - 1;
        if(newPage <= 0){
            newPage = this.state.numPages;
        }
        this.setState({
            numCards: this.state.numCards,
            width: this.state.width,
            numPages: this.state.numPages,
            currentPage: newPage,
            previousPage: previousPage,
            animationDirection: "left"
        });
        setTimeout(()=>this.setState({
            numCards: this.state.numCards,
            width: this.state.width,
            numPages: this.state.numPages,
            currentPage: this.state.currentPage,
            previousPage: this.state.previousPage,
            animationDirection: null
        }), this.animationDuration - 20);
    }

    resize(){
        // Configuring the maxWidth that can be occupied by the component according to the device type
        const maxWidth = (this.context.isPhone)? 100: 80;
        const availableWidth = (window.innerWidth * maxWidth)/100;
        // Defining the card margins and calculating the actual component size
        const cardMargin = (this.context.isPhone)? ((this.context.isSmallPhone)? 8: 10): 15;
        let cardSize = (this.context.isPhone)? ((this.context.isSmallPhone)? 130: 150): 200;
        cardSize += 2*cardMargin;
        const numCards = Math.floor(availableWidth/cardSize);
        const componentWidth = numCards * cardSize + 30;
        // Calculating the number of carrousel pages that will be necessary
        const numPages = Math.ceil(this.props.children.length/numCards);
        // Setting the state of the component according to the above calculations
        this.setState({
            numCards: numCards,
            width: componentWidth,
            numPages: numPages,
            currentPage: 1,
            previousPage: 1,
            animationDirection: null
        });
    }

    lock(e){
        const unify = e.changedTouches? e.changedTouches[0]: e;
        this.x0 = unify.clientX;
    }

    move(e){
        const unify = e.changedTouches? e.changedTouches[0]: e;
        if(this.x0 || this.x0 === 0){
            const dx = unify.clientX - this.x0;
            const signal = Math.sign(dx);
            if(Math.abs(dx) >= this.state.width){    
                if(signal > 0){
                    this.nextPage();
                }else{
                    this.previousPage();
                }
            }
            this.x0 = null;
        }
    }

    // Checking if the number of cards changed and updating the component if they did
    getSnapshotBeforeUpdate(prevProps){
        return prevProps;
    }

    componentDidUpdate(prevProps){
        if(prevProps.children.length !== this.props.children.length){
            const numPages = Math.ceil(this.props.children.length/this.state.numCards);
            this.setState({
                numCards: this.state.numCards,
                width: this.state.width,
                numPages: numPages,
                currentPage: 1,
                previousPage: 1,
                animationDirection: this.state.animationDirection
            });
        }
    }

    componentDidMount(){
        // Configuring the maxWidth that can be occupied by the component according to the device type
        const maxWidth = (this.context.isPhone)? 100: 80;
        const availableWidth = (window.innerWidth * maxWidth)/100;
        // Defining the card margins and calculating the actual component size
        const cardMargin = (this.context.isPhone)? ((this.context.isSmallPhone)? 8: 10): 15;
        let cardSize = (this.context.isPhone)? ((this.context.isSmallPhone)? 130: 150): 200;
        cardSize += 2*cardMargin;
        const numCards = Math.floor(availableWidth/cardSize);
        const componentWidth = numCards * cardSize + 30;
        // Calculating the number of carrousel pages that will be necessary
        const numPages = Math.ceil(this.props.children.length/numCards);
        // Setting the state of the component according to the above calculations
        this.setState({
            numCards: numCards,
            width: componentWidth,
            numPages: numPages,
            currentPage: 1,
            previousPage: 1,
            animationDirection: null
        });
        // Adding a event listener to resize the component when the viewport size changes
        window.addEventListener('resize',this.resize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.resize);
    }

    render(){
        const begin = (this.state.currentPage - 1) * this.state.numCards;
        const slicedItems = this.props.children.slice(begin,begin + this.state.numCards);
        const pbegin = (this.state.previousPage - 1) * this.state.numCards;
        const previousItems = this.props.children.slice(pbegin,pbegin + this.state.numCards);
        return (
            <div 
            className="carrousel-container" 
            style={{width: this.state.width + "px"}} 
            onTouchStart={this.lock} 
            onTouchEnd={this.move}>
                <button className="carrousel-previous" onClick={()=>this.previousPage()}/>
                <div className="carrousel-items">
                    {slicedItems}
                </div>
                {
                    (this.state.animationDirection) && (
                    <div className={`carrousel-animator-duplicate carrousel-slide-${this.state.animationDirection}`}>
                        {previousItems}
                    </div>)
                }
                <button className="carrousel-next" onClick={()=>this.nextPage()}/>
            </div>
        );
    }
}

export default Carrousel;