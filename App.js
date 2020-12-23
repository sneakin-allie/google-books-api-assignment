import React from 'react';
import BookSearch from './BookSearch';
import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchQuery: "",
      printType: "all",
      bookType: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
      const {searchQuery, printType, bookType} = this.state
      const url = 'https://www.googleapis.com/books/v1/volumes?q=' + searchQuery + '&printType=' + printType + '&filter=' + bookType;
      const options = {
        method: 'GET',
      };
  
      fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  handleSearchChange = (e) => {
    this.setState({
        searchQuery: e.target.value
    })
  }

  handlePrintTypeChange = (e) => {
    this.setState({
        printType: e.target.value
    })
  }

  handleBookTypeChange = (e) => {
    this.setState({
      bookType: e.target.value
    })
  }

  render() {
    const {searchQuery, books, printType, bookType} = this.state;
    return (
      <div className="App">
        <BookSearch 
          handleSubmit={this.handleSubmit} 
          handleSearchChange={this.handleSearchChange}
          searchQuery={searchQuery}
          handlePrintTypeChange={this.handlePrintTypeChange}
          printType={printType}
          handleBookTypeChange={this.handleBookTypeChange}
          bookType={bookType}
        />
        {books && (
          <BookList books={books}/>
        )}
        {!books && (
          <div>No results, try again</div>
        )}
      </div>
    );
  }
}

export default App;