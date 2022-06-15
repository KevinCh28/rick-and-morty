import React from "react";
import CharacterIndexItem from "./character_index_item";

class CharacterIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    const { characters } = this.props;

    return (
      <div>
        <h1>Rick and Morty Characters!</h1>
        {characters.map(character =>
          <CharacterIndexItem
            key={character.id}
            character={character}
          />
        )}
      </div>
    )
  }
};

export default CharacterIndex;