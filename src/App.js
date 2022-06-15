import './App.css';
import CharacterIndexContainer from './components/character/character_index_container';
import CharacterShowContainer from './components/character/character_show_container';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:characterId" element={<CharacterShowContainer/>} />
          <Route path="/" element={<CharacterIndexContainer/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
