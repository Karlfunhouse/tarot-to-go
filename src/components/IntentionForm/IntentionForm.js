import React, { Component } from 'react'
import './IntentionForm.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

export class IntentionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            intention: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            intention: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await this.props.setIntention(this.state.intention)
        await this.props.drawACard()
        this.props.history.push('/single-card')
    }

    handleSubmitThree = (e) => {
        e.preventDefault()
        this.props.setIntention(this.state.intention)
        this.props.drawThreeCards()
        this.props.history.push('/three-card-spread')
    }

    
    render() {
        const {intention} = this.state
        const isFilledOut = intention ? false : true;
        return (
            <div className="intention-container">
                <h3 className="intention-message">Close your eyes.</h3>
                <h3 className="intention-message">Take a deep breath.</h3>
                <h3 className="intention-message">Enter your question or intention for this session below.</h3>
                <form className="intention-form">
                    <label htmlFor="intention" className='intention-label'></label>
                    <input 
                        type='text'  
                        id='intention' 
                        placeholder='Magic Awaits...'
                        name='intention' 
                        required 
                        onChange={this.handleChange} 
                    />
                    <button
                        type='submit'
                        className="set-intention-button"
                        onClick={this.handleSubmit}
                        disabled={isFilledOut}
                    >DRAW A SINGLE CARD
                    </button>
                    <button
                        type='submit'
                        className="set-intention-button"
                        onClick={this.handleSubmitThree}
                        disabled={isFilledOut}
                    >3 CARD SPREAD
                    </button>
                </form>
                <div className='chosen-intention'>
                    <h3>Your Intention:</h3>
                    {this.state.intention}
                </div>
            </div>
        )
    }
}

export default withRouter(IntentionForm)

//when testing a component we want to test the component without the higher order component
//export const Component to test it - import component into testing file
//when testing, import { IntentionForm } from './IntentionForm/IntentionForm' 6-77
//when using it in the App, import IntentionForm (no brackets) 0-77