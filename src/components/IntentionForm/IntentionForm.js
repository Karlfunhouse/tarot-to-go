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
                <h3 className="intention-message">Please set your intention for this session.</h3>
                <form className="intention-form">
                    <label htmlFor="intention" className='intention-label'></label>
                    <input 
                        type='text' 
                        placeholder='intention' 
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
            </div>
        )
    }
}

export default IntentionForm