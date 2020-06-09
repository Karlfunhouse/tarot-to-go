import React from 'react';
import ReactDOM from 'react-dom';
import IntentionForm from './IntentionForm';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('<IntentionForm />', () => {
    const setIntention = jest.fn();
    const drawACard = jest.fn();
    const drawThreeCards = jest.fn();

    it('User should see intention instructions', () => {
        const { getByText } = render(
                <BrowserRouter>
                    <IntentionForm 
                        setIntention={setIntention}
                        drawACard={drawACard} 
                        drawThreeCards={drawThreeCards}/>
                </BrowserRouter>);
        expect(getByText('Close your eyes.')).toBeInTheDocument();
        expect(getByText('Take a deep breath.')).toBeInTheDocument();
        expect(getByText('Enter your question or intention for this session below.')).toBeInTheDocument();
        expect(getByText('Your Intention:')).toBeInTheDocument()
    })

    it('User should be able to enter an intention or question', () => {
        const { getByPlaceholderText, getByText } = render(<BrowserRouter><IntentionForm /></BrowserRouter>);
        const intention = getByPlaceholderText('Magic Awaits...')

        fireEvent.change(intention, {target: {value: 'Why is the world on fire?'}});
        expect(getByText('Why is the world on fire?')).toBeInTheDocument()

    })

    it('User should be able to draw a card', async () => {
        const drawACard = jest.fn();
        const setIntention = jest.fn();
        const { getByPlaceholderText, getByText } = render(<BrowserRouter>
                    <IntentionForm 
                        setIntention={setIntention}
                        drawACard={drawACard} 
                        drawThreeCards={drawThreeCards}/></BrowserRouter>);
        const intention = getByPlaceholderText('Magic Awaits...')
        const drawCardButton = getByText('DRAW A SINGLE CARD')
                
        await waitFor(() => {fireEvent.change(intention, {target: {value: 'Why is the world on fire?'}})})

        await waitFor(() => {fireEvent.click(drawCardButton)})
        expect(setIntention).toHaveBeenCalled()
        expect(drawACard).toHaveBeenCalled()
    })

       it('User should be able to draw a card', async () => {
        const drawThreeCards = jest.fn();
        const setIntention = jest.fn();
        const { getByPlaceholderText, getByText } = render(<BrowserRouter>
                    <IntentionForm 
                        setIntention={setIntention}
                        drawACard={drawACard} 
                        drawThreeCards={drawThreeCards}/></BrowserRouter>);
        const intention = getByPlaceholderText('Magic Awaits...')
        const draw3CardsButton = getByText("3 CARD SPREAD");
                
        await waitFor(() => {fireEvent.change(intention, {target: {value: 'Why is the world on fire?'}})})

        await waitFor(() => {fireEvent.click(draw3CardsButton);})
        expect(setIntention).toHaveBeenCalled()
        expect(drawThreeCards).toHaveBeenCalled()
    })
})