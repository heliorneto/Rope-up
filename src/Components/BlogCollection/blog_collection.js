import React from 'react';
import './blog_collection.css';

/*

*/

class BlogCollection extends React.Component{
    constructor(props){
        super(props);
        this.maxItems = (props.type === 'gallery')? 6: 3;
        this.numPages = Math.ceil(props.children.length/this.maxItems);
        this.refreshInterval = null;
        this.state = {
            currentPage: 1,
            animate: false //Variable to control the carrousel slide animation
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.genPageIndex = this.genPageIndex.bind(this);
    }

    nextPage(cicle = false){
        const newPage = this.state.currentPage + 1;
        if(newPage <= this.numPages){
            this.setState({currentPage: newPage, animate: true});
        }else if(cicle){
            this.setState({currentPage: 1, animate: true});
        }
        setTimeout(this.stopAnimation,1000);
    }

    previousPage(cicle = false){
        const newPage = this.state.currentPage - 1;
        if(newPage > 0){
            this.setState({currentPage: newPage});
        }else if(cicle){
            this.setState({currentPage: this.numPages});
        }
    }

    genPageIndex(){
        const pageRange = [...Array(this.numPages).keys()].map((i)=>i+1);
        return pageRange;
    }

    render(){
        const begin = (this.state.currentPage - 1) * this.maxItems;
        const end = begin + this.maxItems;
        const slicedItems = this.props.children.slice(begin,end);
        const itemsClass = `${this.props.type}-items` + ((this.state.animate)? " carrousel-slide": "");
        return (
            <div className={`${this.props.type}-container`}>
                <button className={`${this.props.type}-next`} onClick={()=>this.previousPage(this.props.type === 'carrousel')}/>
                <div className={itemsClass}>
                    {slicedItems}
                </div>
                <button className={`${this.props.type}-previous`} onClick={()=>this.nextPage(this.props.type === 'carrousel')}/>
                <table className={`${this.props.type}-pageselect`}>
                    <tbody>
                        <tr>
                            {this.genPageIndex().map((item,index)=><td key={index} className={`${this.props.type}-pagenum`}>{item}</td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BlogCollection;