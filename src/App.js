import React from 'react';
import './App.css';
import { UserContextProvider } from './contexts/user';
import { Home } from './pages/pages';

function App() {
  return (
    <UserContextProvider > 
      <div className="app">
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;
