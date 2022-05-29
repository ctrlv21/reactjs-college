import logo from './logo.svg';
import './App.css';
import TempCalc from './Components/TempCalc';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Convert from './Components/Convert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TempCalc/>}/>
        <Route path='/convert' element={<Convert/>}/>
      </Routes>
    </Router>
  );
}

export default App;
