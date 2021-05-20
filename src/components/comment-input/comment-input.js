import React, { useState, useContext } from 'react'
import './style.css'
import { UserContext } from '../../contexts/user'
import { db } from '../../firebase';

function CommentInput({ comments, id }) {

  const [comment, setComment] = useState('');
  const [user, setUser] = useContext(UserContext).user;
  const [commentArray, setCommentArray] = useState(comments ? comments : [])

  const postComment = () => {
    if(comment !== '') {
      commentArray.push({
        comment: comment,
        username: user.email.replace('@gmail.com', ''),
      });

      db.collection('posts').doc(id).update({
          comments: commentArray,
        })
        .then(function() {
          setComment('');
        })
        .catch(function(error) {
          console.log(`Error ${error}`);
        });
      }
    }

  return (
    <div className='comment-input'>
      <textarea className='input-text-area'
        rows='1'
        placeholder='Add a comment...'
        value={comment}
        onChange={(event) => setComment(event.target.value)}>
      </textarea>
      <button onClick={postComment} className='comment-btn' >Comment</button>
    </div>
  );
}

export default CommentInput;