import React from 'react'
import './App.css';
import CommandPallette from './components/CommandPallette'

function App() {
  return (
    <>
        <h1 className="text-3xl font-bold text-center">Welcome to the Command Pallette test - press control-k or command-k to open the pallette!</h1>
        <CommandPallette />
    </>
  );
}

export default App;
