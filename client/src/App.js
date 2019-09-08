import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    score: 0,
    highscore: 0,
    loss: 0,
    win: 0,
    clicked: []
  };

  picClick = id => {
    let trackClick = this.state.clicked
    // console.log(trackClick)
    let correctClicks = 0
    let updateHighScore = this.state.highscore
    let updateLosses = this.state.loss
    let updateWins = this.state.win
    let imgShuffle = characters.sort( () => Math.random() -0.5);
    if (this.state.clicked.includes(id)) {
      trackClick = []
      updateLosses++
      correctClicks = 0
    }
    else {
      trackClick.push(id)
      correctClicks = this.state.score + 1
      if (correctClicks > this.state.highscore) {
        updateHighScore = correctClicks
        if (updateHighScore === 12){
          updateWins++
          trackClick = []
          correctClicks = 0
        }
      }
    }

    this.setState({
      characters: imgShuffle,
      score: correctClicks,
      highscore: updateHighScore,
      loss: updateLosses,
      win: updateWins,
      clicked: trackClick
    })
  }

  render() {
    return (
      <div>
        <Header 
        score = {this.state.score}
        highscore = {this.state.highscore}
        loss = {this.state.loss}
        win = {this.state.win}>
        </Header> 
        <Wrapper>
      {this.state.characters.map(character => (
        <Card 
          id={character.id}
          image={character.image}
          name={character.name}
          cardClicked = {this.picClick}
          key={character.id}
        />
      ))}
    </Wrapper>
      </div>      
    );
  }

  // how to shuffle images: 
  // const newArray = this.state.characters.sort( () => Math.random() -0.5)
  // this.setState({ characters: newArray })
}

export default App;
