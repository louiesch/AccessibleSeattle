import React from 'react';
import Header from './components/Header';
import PostControl from './components/Posts/PostControl';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="row">
          <div className="column">
          <PostControl />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
