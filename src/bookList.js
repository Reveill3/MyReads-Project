import React, { Component } from 'react';
import Book from './book.js';
import PropTypes from 'prop-types';

class BookList extends Component {

  render () {
    return (
      <ul className='books-grid'>
        {this.props.currentbooks.map(book => {
        return(
           <Book key={book.id} bookinfo={book
           } changeshelf={(event) => this.props.handlechangeshelf(event, book, this.props.shelf)}/>)
        }
      )
    }
      </ul>
    )
  }
}

BookList.propTypes = {
    currentbooks: PropTypes.array.isRequired,
    handlechangeshelf: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
};

export default BookList
