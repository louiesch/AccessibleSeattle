import React from 'react'
import './style.css'

export default function CommentInput({id}) {
  return (
    <div className='comment-input'>
      <textarea className='input-text-area'
        rows='1'>
      </textarea>
      <button className='comment-btn' >Comment</button>
    </div>
  );
}
