import React from 'react';
import './carrousel.css';

/*
    This component renders the child items (passed inside the tag as
    props.children) in the form of a carrousel. It also receives the
    following props:
    - maxWidth: integer to control the maximum amount of the screen that the component should use (in % -> 50 = 50% screen usage)
    - mediaState: object containing the current media state (must contain isSmallPhone and isPhone boolean proprieties indicating the state)
*/

class Carrousel extends React.Component{
    constructor(props){
        super(props);
        const availableSize = (window.innerWidth * props.maxWidth)/100;
        let cardSize = (props.mobile.isSmallPhone)? 130: ((props.mobile.isPhone)? 150: 200);
        const cardMargin = (props.mobile.isPhone)? ((props.mobile.isSmallPhone)? 8: 10): 15;
        cardSize += 2 * cardMargin;
        const numCards = Math.floor(availableSize/cardSize); 
        const componentSize = (numCards * cardSize) + 30;
        const numPages = Math.ceil(props.children.length/numCards);
        this.animationDuration = 750; // Animation duration in milliseconds
        this.x0 = null;
        this.state = {
            numCards: numCards,
            width: componentSize,
            numPages: numPages,
            currentPage: 1,
            previousPage: 1,
            animationDirection: null //Controls the direction of the carrousel animation
        };
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
            previousPage: this.state.currentPage, 
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
            previousPage: this.state.currentPage,
            animationDirection: null
        }), this.animationDuration - 20);
    }

    resize(){
        const availableSize = (window.innerWidth * this.props.maxWidth)/100;
        let cardSize = (this.props.mobile.isSmallPhone)? 130: ((this.props.mobile.isPhone)? 150: 200);
        const cardMargin = (this.props.mobile.isPhone)? ((this.props.mobile.isSmallPhone)? 8: 10): 15;
        cardSize += 2 * cardMargin;
        const numCards = Math.floor(availableSize/cardSize); 
        const componentSize = (numCards * cardSize) + 30;
        const numPages = Math.ceil(this.props.children.length/numCards);
        this.setState({
            numCards: numCards,
            width: componentSize,
            numPages: numPages,
            currentPage: this.state.currentPage,
            previousPage: this.state.previousPage,
            animationDirection: this.state.animationDirection
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
            if(signal > 0){
                this.nextPage();
            }else{
                this.previousPage();
            }
            this.x0 = null;
        }
    }

    // Checking if cards already loaded
    componentDidUpdate(){
        if(this.props.length){
            const numPages = Math.ceil(this.props.children.length/this.state.numCards);
            this.setState({
                numCards: this.state.numCards,
                width: this.state.width,
                numPages: numPages,
                currentPage: this.state.currentPage,
                previousPage: this.state.previousPage,
                animationDirection: this.state.animationDirection
            });
        }
    }

    componentDidMount(){
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