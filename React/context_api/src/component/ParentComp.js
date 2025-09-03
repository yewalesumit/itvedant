import React,{createContext} from 'react'
import ChildComp from './ChildComp';

export const msgProvider = createContext();

const ParentComp = () => {
  let msg = 'hello i am from parent'
  return (
    <msgProvider.Provider value={msg}>
      <ChildComp />
    </msgProvider.Provider>
  )
}

export default ParentComp;
