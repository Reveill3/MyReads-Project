import React, { Component } from 'react';
import Book from './book.js';
import PropTypes from 'prop-types';

class BookList extends Component {
//   componentDidMount () {
//     const currentBooks = fetch()
//   }

  render () {
    return (
      <ul className='books-grid'>
        <Book />
      </ul>
    )
  }
}

BookList.propTypes = {
    currentids: PropTypes.array.isRequired,
};

export default BookList
