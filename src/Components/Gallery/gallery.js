import React from 'react';
import './gallery.css';

/*
    This component renders a gallery (a structure with the items in a grid and
    different pages) with the items passes inside the tag (as props.children).
    It also receives the following props:
    - rows: The number of rows per page
    - columns: The number of columns per page
    - cardSpacing: string, controls the amount of space between cards (in px)
*/

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.numItems = props.rows * props.columns;
        this.numPages = Math.ceil(props.children.length/this.numItems);
        this.state = {
            currentPage: 1
        };
        this.genPageIndex = this.genPageIndex.bind(this);
        this.getItemsMatrix = this.genItemsMatrix.bind(this);
    }

    genPageIndex(){
        const pageRange = [...Array(this.numPages).keys()].map((item,index)=>item+1);
        return pageRange;
    }

    genItemsMatrix(){
        const begin = (this.state.currentPage - 1) * this.numItems;
        const end = begin + this.numItems;
        const items = this.props.children.slice(begin,end);
        let matrix = Array(this.props.rows);
        for(let i = 0; i < matrix.length; i++){
            let colStart = this.props.columns * i;
            let colEnd = colStart + this.props.columns;
            matrix[i] = items.slice(colStart, colEnd);
            if(matrix[i].length === 0){
                matrix[i] = Array(this.props.columns).fill("");
            }
        }
        return matrix;
    }

    goToPage(pageNum){
        this.setState({currentPage: pageNum});
    }

    render(){
        const pages = this.genPageIndex();
        const items = this.genItemsMatrix();
        return (
            <div className="gallery-container">
                <table className="gallery-items" style={{borderSpacing: this.props.cardSpacing}}>
                    <tbody>
                        {
                            items.map((row,index)=><tr key={`r${index}`}>
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
    }
}

export default Gallery;