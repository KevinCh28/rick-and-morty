import React from "react";

class CharacterShow extends React.Component {
  constructor(props) {
    super(props)
    this.renderLocation = this.renderLocation.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.characterId < 827 && this.props.match.params.characterId > 0) {
      this.props.fetchCharacter(this.props.match.params.characterId)
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.character !== prevState.character) {
      this.props.fetchLocation(this.props.character.location.url)
    }
  }

  renderLocation() {
    const { location } = this.props;
    let locationInfo;

    if (location.name) {
      locationInfo =
      <div>
        <p>{location.name}</p>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Number of residents: {location.residents.length}</p>
      </div>
    } else {
      locationInfo =
      <div>
        No information found.
      </div>
    }
    return locationInfo;
  }

  render() {
    const { character, location } = this.props;
    if (!character || !location) return null;

    return (
      <div>
        {this.props.match.params.characterId < 827 && this.props.match.params.characterId > 0 ?
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <h3>Location:</h3>
            {this.renderLocation()}
          </div>
          :
          <div>
            No character with that ID, please try again with ID #1-826
          </div>
        }
      </div>
    )
  }
};

export default CharacterShow;