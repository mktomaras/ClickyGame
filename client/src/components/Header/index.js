import React from "react";
import "./style.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <h1 className="col-sm-10">Harry Potter Memory Game</h1>

      <div className="col-sm-2" >
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            Correct Clicks: {props.score}
          </li>
          <li className="nav-item">
            Highest Clicks: {props.highscore}
          </li>
          <li className="nav-item">
            Losses: {props.loss}
          </li>
          <li className="nav-item">
            Wins: {props.win}
          </li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Header;
