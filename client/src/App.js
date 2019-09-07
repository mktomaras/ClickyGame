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
    clicked: []
  };

  cardClicked = id => {
    const characters = this.state.characters.map(character => character.id !== id);
    this.setState({ characters });
  }

  render() {
    return (
      <div>
        <Header /> 
        <Wrapper>
      {this.state.characters.map(character => (
        <Card
          id={character.id}
          image={character.image}
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
