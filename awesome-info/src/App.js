import React from 'react';
import './App.css';

import ItemPage from './components/ItemPage';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemPage />
      </header>
    </div>
  );
}

export default App;
