import React from 'react'
import './Card.css'

const Card = (props) => {
    const { type, name, name_short, suit, meaning_up, value_int } = props.card
    const card = props.card[0]
    console.log(card);
    

    return (
      <div className="card">
        <div>
          <img
            src={`/images/cards/${name_short}.png`}
            className="card-image"
            alt={name}
          />
        </div>
        <div className="card-details">
          <div className={suit || "major-arcana"}>
            <h3 className="card-name">{name}</h3>
            <h3 className="card-value">{value_int}</h3>
            <h3>{suit ? null : "Major Arcana"}</h3>
            <h4 className="card-description">
              <u>Meaning</u>
              <br></br>
              <br></br>
              {meaning_up}
            </h4>
          </div>
        </div>
      </div>
    );

}

export default Card
