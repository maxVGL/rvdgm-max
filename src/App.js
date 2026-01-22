import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Main';
import CharSel from './CharSel';
import Game from './Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/char-sel" element={<CharSel />} />
        <Route path="/game" element={<Game />}/>
      </Routes>
    </Router>
  );
}

export default App;
