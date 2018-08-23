import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  return (
    <li key={props.bookinfo.title} className='book'>
      <div className='book-top'>
        <img alt={props.bookinfo.title}src={props.bookinfo.imageLinks.thumbnail} className='book-cover' />
        <div className='book-shelf-changer'>
          <select onChange={(event) => props.changeshelf(event)} defaultValue={props.bookinfo.shelf} initial={props.bookinfo.shelf}>
            <option value='current'>Current</option>
            <option value='want'>Want To Read</option>
            <option value='read'>Read Already</option>
          </select>
        </div>
      </div>
      <p className='book-title'>{props.bookinfo.title}</p>
      <p className='book-authors'>{props.bookinfo.authors}</p>
    </li>
  )
}

Book.propTypes = {
  bookinfo: PropTypes.object.isRequired,
  changeshelf: PropTypes.func.isRequired
};
export default Book;
