import React from "react";

class CharacterShow extends React.Component {
  componentDidMount() {
    console.log("apple")
    this.props.fetchCharacter(this.props.match.params.characterId);
  }

  render() {
    const { character } = this.props;
    if (!character) return null;

    return (
      <div>
        {/* {character.name} */}
        apple
      </div>
    )
  }
};

export default CharacterShow;