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

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleState = null;
    let addPostButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreatePost />
    } else {
      currentlyVisibleState = <SocialFeed />
      addPostButton = <button onClick={this.handleClick}>Share Post</button>
    }
    return (
      <>
        <div className='row'>
          <div className='column'>
            {addPostButton}
            {currentlyVisibleState}
          </div>
        </div>
      </>
    );
  }

}

export default PostControl;