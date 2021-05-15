import React from 'react';
import Header from './Header';
import PostControl from './Posts/PostControl';

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
