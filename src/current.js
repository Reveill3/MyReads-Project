import React from 'react'
import BookList from './bookList.js'
import PropTypes from 'prop-types'

const CurrentShelf = props => {
  return (
    <div className='bookshelf'>
      <h1 className='bookshelf-title'>Currently Reading</h1>
      <BookList className='bookshelf-books' currentids={props.current} handlechangeshelf={props.shelfchange} />
    </div>
  )
}
CurrentShelf.propTypes = {
  current: PropTypes.array.isRequired,
  shelfchange: PropTypes.func.isRequired
}

export default CurrentShelf
