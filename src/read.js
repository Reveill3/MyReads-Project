import React from 'react'
import BookList from './bookList.js'
import PropTypes from 'prop-types'

const ReadShelf = props => {
  return (
    <div className='bookshelf'>
      <h1 className='bookshelf-title'>Read Already</h1>
      <BookList className='bookshelf-books' currentids={props.read} />
    </div>
  )
}

ReadShelf.propTypes = {
  read: PropTypes.array.isRequired
}

export default ReadShelf
