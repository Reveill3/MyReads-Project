import React, { Component } from 'react';
import './App.css';
import CurrentShelf from './current.js';
import WantShelf from './want.js';
import ReadShelf from './read.js';
import * as BooksAPI from './BooksAPI.js';

class App extends Component {
  state = {
    current: [],
    want: [],
    read: []
  }

  filterBooks = () => {
      BooksAPI.getAll().then(books => {
        this.setState(() => {return({
          current: books.filter(book => book.shelf === 'currentlyReading'),
          want: books.filter(book => book.shelf === 'wantToRead'),
          read: books.filter(book => book.shelf === 'read')
        })})
      })
  }

  componentDidMount(){
    this.filterBooks()
  }

  handleChange = (event, book, currentshelf) => {
    console.log(event);
    BooksAPI.update(book, event.target.value);
    this.filterBooks()

  }

  render() {
    return (
      <div className="list-books-content">
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <CurrentShelf current={this.state.current}
                      shelfchange={this.handleChange}
                      />
        <WantShelf want={this.state.want}
                    shelfchange={this.handleChange}
                    />
        <ReadShelf read={this.state.read}
                    shelfchange={this.handleChange}
                    />
      <div className='open-search'>
        <a href='' />
      </div>

        </div>
    );
  }
}

export default App;
