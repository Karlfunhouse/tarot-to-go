import React, { Component } from 'react'
import './IntentionForm.css'

class IntentionForm extends Component {
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setIntention(this.state.intention)
    }

    render() {
        const {intention} = this.state
        const isFilledOut = intention ? false : true 
        return (
            <div className="intention-container">
                <h3 className="intention-message">Close your eyes.</h3>
                <h3 className="intention-message">Take a deep breath.</h3>
                <h3 className="intention-message">Set your intention for this session.</h3>
                <form className="intention-form">
                    <label htmlFor="intention" className='intention-label'></label>
                    <input 
                        type='text'  
                        id='intention' 
                        name='intention' 
                        required 
                        onChange={this.handleChange} 
                    />
                    <button
                        type='submit'
                        className="set-intention-button"
                        onClick={this.handleSubmit}
                        disabled={isFilledOut}
                    >SET YOUR INTENTION
                    </button>
                </form>
                <p className='chosen-intention'>
                    <h3>Your Intention:</h3>
                    {this.state.intention}
                </p>
            </div>
        )
    }
}

export default IntentionForm