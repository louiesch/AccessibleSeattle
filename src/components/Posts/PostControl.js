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
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreatePost />;
      buttonText = "Return to Posts";
    } else {
      currentlyVisibleState = <SocialFeed />
      buttonText = "Share Post";
    }
    return (
      <>
        <div className='row'>
          <div className='column'>
            <button onClick={this.handleClick}>{buttonText}</button>
            {currentlyVisibleState}
          </div>
        </div>
      </>
    );
  }

}

export default PostControl;