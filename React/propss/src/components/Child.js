import React from 'react'
import GrandChild from './GrandChild';

const Child = (props) => {
  return (
    <div className='child'>
        <h2>I am child component</h2>
        <GrandChild message={props.message} />
    </div>
  )
}

export default Child;