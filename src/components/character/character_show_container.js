import { connect } from "react-redux";
import CharacterShow from "./character_show";
import { fetchCharacter } from "../../actions/character_actions";
import { fetchLocation } from "../../actions/location_action";
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    character: state.characters,
    location: state.locations,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacter: (characterId) => dispatch(fetchCharacter(characterId)),
    fetchLocation: (url) => dispatch(fetchLocation(url)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterShow));