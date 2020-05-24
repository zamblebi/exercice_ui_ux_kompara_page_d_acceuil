import React from 'react';
import './App.css';
import styled from 'styled-components'

//components
import NavBar from './components/NavBar'
import Intro from './components/Intro'

const H1 = styled.h1`
`



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Intro/>
      </header>
    </div>
  );
}

export default App;
