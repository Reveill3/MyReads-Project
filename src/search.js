import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookList from './bookList.js';

const Search = props => {
return (
  <div className='search-books-input-wrapper'>
    <div className='search-books-bar'>
      <Link to='/' className='close-search'></Link>
      <input type='text'
        value={props.query}
        onChange={props.handletyping}
        placeholder='Enter Book Subject'/>
    </div>
      <div className='search-books-results'>
        <BookList currentstate={props.currentstate} currentbooks={props.results} handlechangeshelf={props.handlechange}/>
      </div>
  </div>

)
}

Search.propTypes = {
  handlechange: PropTypes.func.isRequired,
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  query: PropTypes.string.isRequired,
  handletyping: PropTypes.func.isRequired
};

export default Search
