import React from 'react'
import './Card.css'

const Card = (props) => {
    const { type, name, name_short, suit, meaning_up } = props.card
    const card = props.card[0]
    console.log(card);
    

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={`/images/cards/${name_short}.png`} alt={name}/>
            </div>
            <div className='card-details'>
                <div className={suit || 'major-arcana'}>
                    <h3 className='card-name'>{name}</h3>
                    <h3>{suit? null : 'Major Arcana'}</h3>
                    <h4 className='card-description'>{meaning_up}</h4>
                </div>

            </div>
        </div>
    )

}

export default Card
