import React from 'react';
import './gallery.css';

/*
    This component renders a gallery (a structure with the items in a grid and
    different pages) with the items passes inside the tag (as props.children).
    It also receives the following props:
    - rows: The number of rows per page
    - columns: The number of columns per page
    - cardSpacing: string, controls the amount of space between cards (in px)
    - countItems: a async function that returns a promise with the total number of items to display
    - getPageItems: a async function that takes the {currentPage, numPageItems} context parameter 
    and returns a promise of an array containing the "numPageItems" items of the page "currentPage"
*/

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.numPageItems = props.rows * props.columns;
        this.state = {
            loaded: false,
            numItems: 0,
            currentItems: null
        };
        this.genPageIndex = this.genPageIndex.bind(this);
        this.getItemsMatrix = this.genItemsMatrix.bind(this);
    }

    genPageIndex(){
        const numPages = Math.ceil(this.state.numItems/this.numPageItems);
        const pageRange = [...Array(numPages).keys()].map((item)=>item+1);
        return pageRange;
    }

    genItemsMatrix(itemsArray){
        let matrix = Array(this.props.rows);
        for(let i = 0; i < matrix.length; i++){
            let colStart = this.props.columns * i;
            let colEnd = colStart + this.props.columns;
            matrix[i] = itemsArray.slice(colStart, colEnd);
            if(matrix[i].length === 0){
                matrix[i] = Array(this.props.columns).fill("");
            }
        }
        return matrix;
    }

    async goToPage(pageNum){
        const newItems = await this.props.getPageItems({
            currentPage: pageNum, 
            numPageItems: this.numPageItems
        });
        const itemsMatrix = this.getItemsMatrix(newItems);
        this.setState({
            loaded: true,
            numItems: this.state.numItems,
            currentItems: itemsMatrix
        });
    }

    async componentDidMount(){
        const numItems = await this.props.countItems();
        this.setState({
            loaded: false,
            numItems: numItems,
            currentItems: null
        });
        await this.goToPage(1);
    }

    render(){
        const pages = this.genPageIndex();
        if(this.state.loaded){
            return (
                <div className="gallery-container">
                    <table className="gallery-items" style={{borderSpacing: this.props.cardSpacing}}>
                        <tbody>
                            {
                                this.state.currentItems.map((row,index)=><tr key={`r${index}`}>
                                    {row.map((item,index)=><td key={`c${index}`}>
                                        {item}
                                    </td>)}
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <table className="gallery-pages">
                        <tbody>
                            <tr>
                                {
                                    pages.map((page,index)=>(
                                        <td key={index}>
                                            <span 
                                            className="gallery-page-num" 
                                            selectedpage={(this.state.currentPage === page)? "true": "false"} 
                                            onClick={()=>this.goToPage(page)}
                                            >
                                                {page}
                                            </span>
                                        </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }else{
            return (
                <div className="gallery-container">
                    <table className="gallery-items" style={{borderSpacing: this.props.cardSpacing}}>
                        <tbody>
                        </tbody>
                    </table>
                    <table className="gallery-pages">
                        <tbody>
                            <tr>
                                {
                                    pages.map((page,index)=>(
                                        <td key={index}>
                                            <span 
                                            className="gallery-page-num" 
                                            selectedpage={(this.state.currentPage === page)? "true": "false"} 
                                            onClick={()=>this.goToPage(page)}
                                            >
                                                {page}
                                            </span>
                                        </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default Gallery;