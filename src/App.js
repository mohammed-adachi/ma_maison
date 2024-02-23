import logo from './logo.svg';
import Home from './page/home';
import Room from './page/room';
import SeulRoom from './page/seulRoom';
import Erreur from './page/erreur';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/erreur" element={<Erreur />} />
          <Route path="/seulRoom" element={<SeulRoom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
