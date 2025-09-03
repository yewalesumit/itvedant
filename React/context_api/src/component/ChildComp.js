import React from 'react'
import GrandChildComp from './GrandChildComp'

const ChildComp = () => {
  return (
    <div>
        <h2>Child Component</h2>
        <GrandChildComp />
    </div>
  )
}

export default ChildComp;