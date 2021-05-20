import React from 'react'
import './style.css'

export default function Comment({username, content}) {
  return (
    <div className='comment'>
      <p>
        <span style={{ fontWeight: 'bold', marginRight: '5px'}}>
          {username + ':'}
        </span>
        {content}
      </p>
      
    </div>
  )
}
