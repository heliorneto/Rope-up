import React from 'react';
import Header from './../../Components/Header/header';
import Footer from './../../Components/Footer/footer';
import Article from './../../Components/Article/article';
import './artigos.css';

const APIBaseURL = "https://ropeup-cms-test.herokuapp.com";

class Artigos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showProgress: false,
            progress: 0
        };
        this.updateProgress = this.updateProgress.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll',this.updateProgress);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.updateProgress);
    }

    updateProgress(){
        const scrollOffset = (document.body.scrollTop)? document.body.scrollTop: document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollOffset/maxScroll)*100;
        if(scrollOffset > 50){
            this.setState({showProgress: true, progress: progress});
        }else{
            this.setState({showProgress: false, progress: 0});
        }
    }

    render(){
        return (
            <div id="page-artigos">
                <Header showProgress={true}/>
                <div className={(this.state.showProgress)? "read-progress-bar": "hide-progress"}>
                    <div id="read-progress" style={{width: this.state.progress + "%"}}/>
                </div>
                <Article baseItemsUrl={APIBaseURL + "/items/article"} baseMediaUrl={APIBaseURL + "/assets"} articleID={this.props.match.params.id}/>
                <Footer/>
            </div>
        );
    }
}

export default Artigos;