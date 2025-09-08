import React from 'react'

const Mycomponent = () => {
    const throwError = () => {
        throw new Error()
    }
    throwError()
  return (
    <div>
        <h1>Error</h1>
    </div>
  )
}

export default Mycomponent;