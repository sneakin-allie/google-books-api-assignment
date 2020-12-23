import React from 'react';
import Book from './Book';

class BookList extends React.Component {
    render() {
        const books = this.props.books.map((book, i) => <Book {...book} key={i} />)
        return (
            <div className="bookList">
                {books}
            </div>
        );
    }
}

BookList.defaultProps = {
    books: []
};

export default BookList;