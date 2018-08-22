import React, { Component } from 'react';
import Book from './book.js';
import PropTypes from 'prop-types';
import * as BooksAPI from  './BooksAPI.js';

class BookList extends Component {

state = {
  currentBooks: []
}

componentDidMount () {
    this.props.currentids.map(id => (
      BooksAPI.get(id).then(book => {
                                          this.setState(currentState => (
                                            {
                                            currentBooks: [...currentState.currentBooks, book]
                                          }));
                                        }
    )))
  }

  render () {
    return (
      <ul className='books-grid'>
        {this.state.currentBooks.map(book => {
        return(
           <Book key={book.title} bookinfo={book
             }/>)
        }
      )
    }
      </ul>
    )
  }
}

BookList.propTypes = {
    currentids: PropTypes.array.isRequired,
};

export default BookList
