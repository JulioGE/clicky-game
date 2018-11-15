import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  
  state = {
    characters: characters
  };

  removeCharacter = id => {

    const characters = this.state.characters.filter(character => character.id !== id);

    this.setState({ characters });

  };

  render() {
    return (
      <Wrapper>
       
        <Navbar />
        <Title>Characters List</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          
            />
        ))}
      </Wrapper>
    );
  }
}
  
export default App;
