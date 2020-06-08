import React from 'react'
import './Card.css'

const Card = (props) => {
    // const { name, name_short, suit, meaning } = props.card
    const card = props.card[0]
    console.log(card);
    

    return (
        <div className='card'>
            {/* <div className='card-image'>
                <img src={`./public/images/cards/${card}`} alt={card.name}/>
            </div>
            <div className='card-details'>
                <div className={card.suit || 'major-arcana'}>
                    <h3 className='card-name'>{card.name}</h3>
                    <h3>{card.suit || 'Major Arcana'}</h3>
                    <h4 className='card-description'>{card.meaning}</h4>
                </div>

            </div> */}
        </div>
    )

}

export default Card
