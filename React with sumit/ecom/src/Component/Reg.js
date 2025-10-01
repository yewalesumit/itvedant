import { useSearchParams } from "react-router-dom";

function Reg(){

  const[data,setData]= useSearchParams();
  console.log(data.get("name"));
  console.log(data.get("age"));
return(
    <>
        <p>This is Registration Page</p>
        <button 
        onClick={()=> setData({name:"abcdef",age:data.get('age')})}>change</button>
  </>)

}

export default Reg;