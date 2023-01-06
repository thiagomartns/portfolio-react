
import { useState } from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import Topbar from './components/topbar/Topbar';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
