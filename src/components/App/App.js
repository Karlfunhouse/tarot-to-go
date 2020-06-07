import React, { Component }  from 'react';
import Header from '../Header/Header'
import './App.css';
import { fetchCards } from '../../apiFetch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCards: [],
      currentCards: [],
    }
  }

  componentDidMount = async () => {
    const response = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
    const cards = await response.json()
    console.log(cards)
  }


  render() {
    return (
      <div className="App">
        <Header />
        
        
      </div>
    );

  }
}

export default App;
