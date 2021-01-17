import React from 'react';
import './gallery.css';

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
            let colEnd = colStart + 3;
            matrix[i] = items.slice(colStart, colEnd);
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
                <table className="gallery-items">
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
                                        <p className="gallery-page-num" onClick={()=>this.goToPage(page)}>{page}</p>
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