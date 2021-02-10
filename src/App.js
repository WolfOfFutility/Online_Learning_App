import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom"

import TopMenu from "./Components/TopMenu/TopMenu"
import MainArea from "./Components/MainArea/MainArea"

function App() {
  return (
    <div className="App">
      <Router>
        <MainArea />
      </Router>
    </div>
  );
}

export default App;
