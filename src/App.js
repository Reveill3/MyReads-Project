import React, { Component } from 'react';
import './App.css';
import CurrentShelf from './current.js';
import WantShelf from './want.js';
import ReadShelf from './read.js';
import * as BooksAPI from './BooksAPI.js';
import { Link, Route } from 'react-router-dom';
import Search from './search.js';

class App extends Component {
  state = {
    current: [],
    want: [],
    read: [],
    search: [],
    query: ''
  }

  filterBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(books =>{
        this.setState(
          {
            search: books
          }
        );
      }
      )
    } else {
      BooksAPI.getAll().then(books => {
        this.setState((currentState) => {return({
          current: books.filter(book => book.shelf === 'currentlyReading'),
          want: books.filter(book => book.shelf === 'wantToRead'),
          read: books.filter(book => book.shelf === 'read'),
          search: currentState.search
        })})
      })
  }}

  componentDidMount(){
    this.filterBooks()
  }

 handleTyping = (event) => {
   const value = event.target.value;
   this.setState(() => {
     if (value === '') {
     return(
       {
         search: [],
         query: value
       }
     )} else {
       return(
         {
           query: value
         }
       )
     }
   }
 );

 this.filterBooks(value)
 }

  handleChange = (event, book, currentshelf) => {
    const currentValue = event.target.value
    this.setState(() => {
      BooksAPI.update(book, currentValue).then(() => this.filterBooks()).then(() => (
        {
          query: ''
        })
      )

  })}

  render() {
    return (
      <div className="list-books-content">

        <Route exact path='/' render={() => (
          <div>
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
              <Link to='/search'></Link>
            </div>
          </div>
        )}/>

        <Route path='/search' render={() => (
          <Search results={this.state.search}
            handlechange={this.handleChange}
            handletyping={this.handleTyping}
            query={this.state.query}
            currentstate={this.state}/>
        )}/>




        </div>
    );
  }
}

export default App;
