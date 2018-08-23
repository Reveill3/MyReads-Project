import React, { Component } from 'react';
import './App.css';
import CurrentShelf from './current.js';
import WantShelf from './want.js';
import ReadShelf from './read.js';

class App extends Component {
  state = {
    current: ['nggnmAEACAAJ'],
    want: ['sJf1vQAACAAJ'],
    read: ['evuwdDLfAyYC']
  }

  handleChange = (event, id) => {
    console.log(event.target.value, id)
  }

  render() {
    return (
      <div className="list-books-content">
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <CurrentShelf current={this.state.current} shelfchange={this.handleChange}/>
        <WantShelf want={this.state.want} shelfchange={this.handleChange} />
        <ReadShelf read={this.state.read} shelfchange={this.handleChange}/>
      <div className='open-search'>
        <a href='' />
      </div>

        </div>
    );
  }
}

export default App;
