import { useState } from 'react';
import Button from './Component/Button';
import Display from './Component/Display';

function Hello(){

  const[cnt,setCnt] = useState(0);

  const setC = () => {
    setCnt(cnt+1)
  }

  return(
    <>
    <button onClick={setC}>{cnt}</button>
    <Button />
    <Display />
    </>
  );
}

export default Hello;