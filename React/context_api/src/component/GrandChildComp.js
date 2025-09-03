import React,{useContext} from 'react'
import { msgProvider } from './ParentComp'

function GrandChildComp() {
    const msg = useContext(msgProvider)
  return (
    <div>
        <p>{msg}</p>
    </div>
  )
}

export default GrandChildComp