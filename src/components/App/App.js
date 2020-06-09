import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import IntentionForm from '../IntentionForm/IntentionForm'
import CardContainer from '../CardContainer/CardContainer'
import Card from '../Card/Card'
import './App.css';
import { fetchCards, fetchSingleCard, fetchThreeCards } from '../../apiFetch';

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
     console.log(singleCardData.cards)
     await this.setState({singleCard: singleCardData.cards})
   }

   drawThreeCards = async () => {
     const threeCardsData = await fetchThreeCards()
     console.log(threeCardsData.cards)
     await this.setState({threeCards: threeCardsData.cards})
   }

   setIntention = (intention) => {
    this.setState({intention: intention})
   }


  render() {
    return (
      <div className="App">
        <Header />
        
        <Switch>
          <Route
            path='/single-card'
            render={() => {
              return(
                <div>
                  <IntentionForm 
                  setIntention={this.setIntention}
                  drawACard={this.drawACard} 
                  drawThreeCards={this.drawThreeCards} />
                  <CardContainer cards={this.state.singleCard}/>
                </div>
              )
            }}
          />
          <Route
            path='/three-card-spread'
            render={() => {
              return(
                <div>
                  <IntentionForm 
                  setIntention={this.setIntention}
                  drawACard={this.drawACard} 
                  drawThreeCards={this.drawThreeCards} />
                  <CardContainer cards={this.state.threeCards}/>
                </div>
              )
            }}
          />
          <Route
            path='/'
            render={() => {
              return(
                <div>
                  <IntentionForm 
                    setIntention={this.setIntention} 
                    drawACard={this.drawACard} 
                    drawThreeCards={this.drawThreeCards}/>
                    <CardContainer cards={this.state.singleCard}/>
                </div>
              )
            }}
          />
        </Switch>
      </div>
    );

  }
}

export default App;
