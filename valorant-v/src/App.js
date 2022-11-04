import Home from './components/Home';
import Play from "./components/Play"
import Agents from './components/Agents'
import Shop from './components/Shop'
import Settings from './components/Settings'
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        
        

        <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/play' element={<Play />}/>
                <Route path='/agents' element={<Agents />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/settings' element={<Settings />}/>
            </Routes>
      </div>
    </div>
  );
}

export default App;
