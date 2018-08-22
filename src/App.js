import React, { Component } from 'react';
import './App.css';
import CurrentShelf from './current.js';

class App extends Component {
  state = {
    current: ['nggnmAEACAAJ', 'sJf1vQAACAAJ','evuwdDLfAyYC'],
    wante: [],
    read: []
  }
  render() {
    return (
      <div className="list-books-content">
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <CurrentShelf current={this.state.current}/>
        </div>
    );
  }
}

export default App;
