import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Lower from './Lower';
import Posts from './Posts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Lower/>
      </header>
      <Posts/>
    </div>
  );
}

export default App;
