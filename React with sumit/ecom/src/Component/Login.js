import { useState } from "react"


function Login() {

  const [username, setUsername] = useState('');
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(username);
    
  }

  const onChangehandler = (event) => {
    setUsername(event.target.value)
    // console.log(username);
  }

  return (
    <>
    <form onSubmit={onSubmitHandler}>
      <input type="text"
      name="username"
      onChange={onChangehandler}
      value={username} />
      <button>Submit</button>
    </form>
    </>
  )
}

export default Login