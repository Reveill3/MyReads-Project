import React, { Component } from 'react';
import Book from './book.js';
import PropTypes from 'prop-types';

class BookList extends Component {

  determineShelf = (book) => {

      let currentids = this.props.currentstate.current.map((sbook) =>(sbook.id));
      let wantids = this.props.currentstate.want.map((sbook) =>(sbook.id));
      let readids = this.props.currentstate.read.map((sbook) =>(sbook.id));
      return(currentids.includes(book.id) ? 'currentlyReading':
      wantids.includes(book.id) ? 'wantToRead':
      readids.includes(book.id) ? 'read':'none')
  }

  render () {
    return (
      <ul className='books-grid'>
        {this.props.currentbooks.length > 0 ? this.props.currentbooks.map(book => {
        return(
           <Book searchshelf={this.determineShelf} key={book.id} bookinfo={book
           } changeshelf={(event) => this.props.handlechangeshelf(event, book, this.props.shelf)}/>)
        }
      ):<li>No Books Were Found Matching Your Search</li>
    }
      </ul>
    )
  }
}

BookList.propTypes = {
    currentbooks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    handlechangeshelf: PropTypes.func.isRequired,
};

export default BookList
