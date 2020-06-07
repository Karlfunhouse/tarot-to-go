import React, { Component }  from 'react';
import Header from '../Header/Header'
import IntentionForm from '../IntentionForm/IntentionForm'
import './App.css';
import { fetchCards, fetchSingleCard, fetchThreeCards } from '../../apiFetch';
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCards: [],
      singleCard: [],
      threeCards: [],
      intention: ''
    }
  }

  componentDidMount = async () => {
    const cardsData = await fetchCards()
    await this.setState({allCards: cardsData})
   }

   drawACard = async () => {
     const singleCardData = await fetchSingleCard()
     await this.setState({singleCard: singleCardData})
   }

   drawThreeCards = async () => {
     const threeCardsData = await fetchThreeCards()
     await this.setState({threeCards: threeCardsData})
   }

   setIntention = (intention) => {
    this.setState({intention: intention})
   }


  render() {
    return (
      <div className="App">
        <Header />
        <IntentionForm setIntention={this.setIntention}/>
        
        
      </div>
    );

  }
}

export default App;
