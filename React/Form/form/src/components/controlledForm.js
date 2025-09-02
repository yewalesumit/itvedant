import React, {useState} from 'react'

function ControlledForm() {
    const [name,setName] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

  return (
    <div>
        <input type='text' value={name} onChange={handleName} />
    </div>
  )
}

export default ControlledForm;
