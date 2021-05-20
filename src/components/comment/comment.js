import React from 'react'

export default function Comment({username, content}) {
  return (
    <div className='comment'>
      <p>
        <span style={{ fontweight: 'bold', marginRight: '8px'}}>
          {username}
        </span>
        {content}
      </p>
      
    </div>
  )
}
