import React from 'react';

class Book extends React.Component {
    render() {
        let price = "NOT_FOR_SALE"
        if (price !== this.props.saleInfo.saleability && this.props.saleInfo.saleability !=="FREE") {
            price = this.props.saleInfo.listPrice.amount
        }
        return (
            <div className="book">
                <img src={this.props.volumeInfo.imageLinks.thumbnail} alt="book cover" />
                <h2>{this.props.volumeInfo.title}</h2>
                <p>Author: {this.props.volumeInfo.authors[0]}</p>
                <p>Price: {price}</p>
                <p>{this.props.searchInfo.textSnippet}</p>
            </div>
        );
    }
}

export default Book;