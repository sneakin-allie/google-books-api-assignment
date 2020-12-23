import React from 'react';

class BookSearch extends React.Component {
    render() {
        const {
            handleSearchChange,
            handleSubmit, 
            handlePrintTypeChange, 
            searchQuery,
            printType,
            handleBookTypeChange,
            bookType
        } = this.props;

        return (
            <div className="bookSearch">
                <h1>Google Book Search</h1>
                <form onSubmit={handleSubmit} className="bookSearch_form">
                    <label htmlFor="search">Search:</label>
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="henry" 
                        value={searchQuery} 
                        onChange={e => handleSearchChange(e)}
                    />
                    <button type="submit">Search</button>
                    <br />
                    <label htmlFor="printType" id="printType">Print Type:</label>
                    <select name="printType" value={printType} onChange={e => handlePrintTypeChange(e)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <br />
                    <label htmlFor="bookType">Book Type:</label>
                    <select name="bookType" id="bookType" value={bookType} onChange={e => handleBookTypeChange(e)}>
                        <option value="no-filter">No Filter</option>
                        <option value="partial">Partial</option>
                        <option value="full">Full</option>
                        <option value="free-ebooks">Free eBooks</option>
                        <option value="paid-ebooks">Paid eBooks</option>
                        <option value="ebooks">eBooks</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default BookSearch;