import { connect } from "react-redux";
import CharacterShow from "./character_show";
import { fetchCharacter } from "../../actions/character_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(ownProps)
  return {
    character: state.characters[ownProps.match.params.characterId] || [],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacter: (characterId) => dispatch(fetchCharacter(characterId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterShow);