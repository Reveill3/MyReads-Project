import React, { Component } from 'react';
import Book from './book.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookList from './bookList.js';

const Search = props => {
return (
  <div className='search-books-input-wrapper'>
    <div className='search-books-bar'>
      <Link to='/' className='close-search'></Link>
      <input type='text'
        placeholder='Enter Book Title'/>
    </div>
      <div className='search-books-results'>
        <BookList shelf='' currentbooks={props.results} handlechangeshelf={props.handlechange}/>
      </div>
  </div>

)
}

Search.propTypes = {
  handlechange: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
};

export default Search
