import React from 'react';
import SocialFeed from './SocialFeed';
import CreatePost from './CreatePost';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <>
        <CreatePost />
        <SocialFeed />
      </>
    );
  }

}

export default Home;