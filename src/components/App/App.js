import React, { Component }  from 'react';
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCards: [],
      currentCards: [],
    }
  }
  return (
    <div className="App">
      <Header />
      
      
    </div>
  );
}

export default App;
