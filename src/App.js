import React, { Component } from 'react';
import './App.css';
import CurrentShelf from './current.js';
import WantShelf from './want.js';
import ReadShelf from './read.js';

class App extends Component {
  state = {
    current: ['nggnmAEACAAJ', 'sJf1vQAACAAJ','evuwdDLfAyYC'],
    want: ['evuwdDLfAyYC','nggnmAEACAAJ', 'sJf1vQAACAAJ'],
    read: ['sJf1vQAACAAJ','evuwdDLfAyYC','nggnmAEACAAJ']
  }
  render() {
    return (
      <div className="list-books-content">
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <CurrentShelf current={this.state.current}/>
        <WantShelf want={this.state.want}/>
        <ReadShelf read={this.state.read}/>
      <div className='open-search'>
        <a href='' />
      </div>

        </div>
    );
  }
}

export default App;
