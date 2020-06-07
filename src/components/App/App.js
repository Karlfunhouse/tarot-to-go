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
    const cardsData = await fetchCards()
    await this.setState({allCards: cardsData})
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
