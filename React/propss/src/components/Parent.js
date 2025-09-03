import React from 'react'
import Child from './Child';

const Parent = () => {
    let message = 'hello from Parent'
  return (
    <div className='parent'>
        <h1>I am Parent</h1>
        <Child message={message} />
    </div>
  )
}

export default Parent;
