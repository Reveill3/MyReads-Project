import React from 'react'
import BookList from './bookList.js'
import PropTypes from 'prop-types'

const WantShelf = props => {
  return (
    <div className='bookshelf'>
      <h1 className='bookshelf-title'>Want To Read</h1>
      <BookList className='bookshelf-books'
        currentbooks={props.want}
        handlechangeshelf={props.shelfchange}
        render={props.render}
        shelf='wantToRead'/>
    </div>
  )
}

WantShelf.propTypes = {
  want: PropTypes.array.isRequired,
  shelfchange: PropTypes.func.isRequired
}

export default WantShelf
