import { useState } from "react";

function About() {

  const [formdata,setformData] = useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    address:'',
    city:'',
    sub:false
  });

  const [error,setError] = useState({
    fname:'',
    pass:''
  })

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    setError({});
    if(formdata.fname === ' ' || formdata.fname === null){
      // alert("Can't br blank");
      setError({
        fname:"Can't br blank"
      })

    } else if(formdata.password.length < 3 || formdata.password.length > 9){
      // alert("Pass in between 3-9 char");
      setError({
        pass:"Pass in between 3-9 char"
      })

    } else {
      console.log(formdata);
      
    }
    return;
  }

  const onChangehandler = (event) => {
    setformData({
      ...formdata,
      [event.target.name] : event.target.type ==='checkbox'? event.target.checked : event.target.value

  })
  }

  return (
    <>
    <form onChange={onSubmitHandler}>
      <input name="fname" 
      onChange={onChangehandler}
      value={formdata.fname} /><br /> <br />
      <p style={{color:'red'}}>{error.fname}</p>

      <input name="lname" 
      onChange={onChangehandler}
      value={formdata.lname} /><br /> <br />

      <input name="email" 
      onChange={onChangehandler}
      value={formdata.email} /><br /> <br />

      <input name="password" 
      onChange={onChangehandler}
      value={formdata.password} /><br /> <br />
      <p style={{color:'red'}}>{error.password}</p>


      <textarea name="address"
      onChange={onChangehandler}
      value={formdata.address} /><br /><br /> 

      <select name="city"
      onChange={onChangehandler}
      value={formdata.city}>

        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        

      </select><br /><br />

      <input type="checkbox"
      name="sub"
      onChange={onChangehandler}
      checked={formdata.sub}
      /><br /><br />

      <button>Submit</button>

    </form>
    <p>{JSON.stringify(formdata)}</p>
    </>
  )
}

export default About