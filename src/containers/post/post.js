import React, { useState, useContext } from 'react';
import './style.css';
import Comment from '../../components/comment/comment'
import { db } from '../../firebase';
import CommentInput from '../../components/comment-input/comment-input'

function Post({
  username, 
  photoURL, 
  title, 
  content,
  comments,
  id
}) {

  const deletePost = () => {


    db.collection('posts').doc(id).delete()
    .then(function () {
      console.log('delete successful');
    })
    .catch(function (error) {
      console.log(`Error ${error}`);
    });
  }


  return (
    <div className='post'>
      <div className='post-header'>
        <div className='post-header-left'>
          <img className='post-profile-img' src={photoURL} />
          <p style={{marginLeft:'8px', fontWeight: 'bold'}}>{username}</p>
        </div>
        <button onClick={deletePost} className='post-delete'>Delete</button>
      </div>
      <div className='post-center'>
        <p>
          <span style={{fontWeight: 'bold', marginRight: '5px'}}>Location: </span>
          {title}
        </p>
        <p>
          <span>{content}</span>
        </p>
      </div>

      <CommentInput comments={comments} id={id} />

      {comments ? (
        comments.map((comment) => (
          <Comment username={comment.username} 
          content={comment.comment} />
        )) 
      ) : (
        <div>

        </div>
      )}
    </div>
  );
}

export default Post;
