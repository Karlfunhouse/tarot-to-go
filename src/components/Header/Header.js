import React from "react"
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <img src="/images/crystal-ball.png" className="icon"/>
            </div>
            <div className="header-text">
                <h2>TAROT TO GO</h2> 
                <h4>For Mystics on the Move</h4>
            </div>
            <div>
                <img src="/images/magic-mist.png" className="icon"/>
            </div>
        </header>
    )
}


export default Header