import React, { Component }  from 'react';
import Header from '../Header/Header'
import IntentionForm from '../IntentionForm/IntentionForm'
import './App.css';
import { fetchCards } from '../../apiFetch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCards: [],
      currentCards: [],
      intention: ''
    }
  }

  componentDidMount = async () => {
    const cardsData = await fetchCards()
    await this.setState({allCards: cardsData})
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
