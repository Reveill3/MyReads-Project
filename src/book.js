import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  return (
    <li className='book'>
      <img src='http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' className='book-top' />
      <p className='book-title'>Title</p>
      <p className='book-authors'>Author</p>
    </li>
  )
}

Book.propTypes = {
  bookinfo: PropTypes.object.isRequired,
};
export default Book;
