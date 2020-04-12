import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter from './components/HookCounter';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      <HookMouse />
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
    </div>
  );
}

export default App;
