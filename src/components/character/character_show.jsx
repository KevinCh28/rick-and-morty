import React from "react";

class CharacterShow extends React.Component {
  constructor(props) {
    super(props)
    this.renderLocation = this.renderLocation.bind(this);
  }

  componentDidMount() {
    this.props.fetchCharacter(this.props.match.params.characterId)
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
        Loading location information
      </div>
    }
    return locationInfo;
  }

  render() {
    const { character, location } = this.props;
    if (!character || !location) return null;

    return (
      <div>
        <div>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <h3>Location:</h3>
          {this.renderLocation()}
        </div>
        
      </div>
    )
  }
};

export default CharacterShow;