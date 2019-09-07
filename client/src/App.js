import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
import Card from "./components/Card";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        {this.state.characters.map(character => (
          <Card
            id={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }

  // how to shuffle images: 
  // const newArray = this.state.characters.sort( () => Math.random() -0.5)
  // this.setState({ characters: newArray })
}

export default App;
