
import { useState } from 'react';
import './app.scss'
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
      </div>
    </div>
  );
}

export default App;
