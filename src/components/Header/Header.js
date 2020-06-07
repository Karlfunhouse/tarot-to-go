import React from "react"
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <img src="/images/crystal-ball.png" className="crystal-ball"/>
            </div>
            <div className="header-text">
                <h2>TAROT TO GO</h2> 
                <h4>For Mystics on the Move</h4>
            </div>
        </header>
    )
}


export default Header