import React from "react";
import { Link } from "react-router-dom";

class CharacterIndexItem extends React.Component {
  render() {
    const { character } = this.props;

    return (
      <div>
        <Link to={`/${character.id}`}>
          <h2>{character.name}</h2>
        </Link>
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
      </div>
    )
  }

}

export default CharacterIndexItem;