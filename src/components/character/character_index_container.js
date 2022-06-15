import { connect } from "react-redux";
import CharacterIndex from "./character_index";
import { fetchCharacters } from "../../actions/character_actions";

const mapStateToProps = state => {
  return {
    characters: Object.values(state.characters),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterIndex);