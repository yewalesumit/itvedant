import React, {useState} from 'react'

const SimpleForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const handleForm = (e) =>{
        alert(`name:${name} Email:${email}`)
    }

  return (
    <div>
        <h1>Simple React Form</h1>
        <form onSubmit={handleForm}>
            Name:
            <input type='text' placeholder='Enter your Name' value={name} onChange={
                (e) => setName(e.target.value)} /><br />
            Email:
            <input type='text' placeholder='Enter your Email' value={email} onChange={
                (e) => setEmail(e.target.value)} /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SimpleForm;
