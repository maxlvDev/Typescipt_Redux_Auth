import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {Main} from './components/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
