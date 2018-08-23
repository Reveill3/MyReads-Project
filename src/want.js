import React from 'react'
import BookList from './bookList.js'
import PropTypes from 'prop-types'

const WantShelf = props => {
  return (
    <div className='bookshelf'>
      <h1 className='bookshelf-title'>Want To Read</h1>
      <BookList className='bookshelf-books' currentids={props.want} />
    </div>
  )
}

WantShelf.propTypes = {
  current: PropTypes.array.isRequired
}

export default WantShelf
