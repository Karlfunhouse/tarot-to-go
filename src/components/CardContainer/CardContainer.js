import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = (props) => {
    const cardsInfo = props.cards.map(card => {
        return <Card card={card}/>
    })
    return (
        <main className='cards-display'>
            {cardsInfo}
        </main>
    )
};

export default CardContainer