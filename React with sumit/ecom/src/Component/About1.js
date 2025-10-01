import { useForm } from "react-hook-form"


function About1() {

  const {register,handleSubmit,formState:{errors}} = useForm();

  const onSubmitHandler = (data) =>{
    console.log(data);
    
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input type="text" 
        {...register('fname',{required:"This is mandatory!!!"})}
        />
        {errors.fname && <p style={{color:'red'}}>{errors.fname.message}</p>}
        <br /><br />
        <input type="text" 
        {...register('lname',{required:"This is mandatory!!!",pattern:/^{A-Za-z}+$/i})}
        />
        {errors.lname && <p>{errors.lname.message}</p>}
        <br /><br />
        <input type="email" 
        {...register('email')}
        />
        <br /><br />
        <input type="password" 
        {...register('password',{required:"This is mandatory!!!",minLength:{
          value:3,
          message:"length should be 3"
        },maxLength:{
          value:9,
          message:"max length should be 9"
        }}
        )}
        />
        <br /><br />
        <input type="text"
        {...register('age',{required:"This is mandatory",
          min:{
            value:18,
            message:"min age should be 18"
          },max:{
            value:65,
            message:"max age  should be 65"
          }
        })} />
        {errors.age && <p>{errors.age.message}</p>}
        <button>Submit</button>

    </form>
    </>
  )
}

export default About1