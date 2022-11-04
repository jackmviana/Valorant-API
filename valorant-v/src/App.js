import Home from './components/Home';
import Play from "./components/Play"
import Agents from './components/Agents'
import Shop from './components/Shop'
import Settings from './components/Settings'
import Raze from './components/Raze';
import Sky from './components/Sky';
import Harbor from './components/Harbor';
import Chamber from './components/Chamber';
import Jett from './components/Jett';
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
                <Route path='/agents/0' element={<Raze />}/>
                <Route path='/agents/1' element={<Sky />}/>
                <Route path='/agents/2' element={<Harbor />}/>
                <Route path='/agents/3' element={<Chamber />}/>
                <Route path='/agents/4' element={<Jett />}/>
            </Routes>
      </div>
    </div>
  );
}

export default App;
