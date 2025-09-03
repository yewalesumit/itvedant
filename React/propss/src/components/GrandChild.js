import React from 'react'

const GrandChild = (props) => {
  return (
    <div className='grandchild'>
        <h2>I am GrandChild component</h2>
        <p>{props.message}</p>
    </div>
  )
}

export default GrandChild;
