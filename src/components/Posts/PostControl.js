import React from 'react';
import CreatePost from './CreatePost';
import SocialFeed from './SocialFeed';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreatePost />
    } else {
      currentlyVisibleState = <SocialFeed />
    }
    return (
      <>
        {currentlyVisibleState}
      </>
    );
  }

}

export default PostControl;