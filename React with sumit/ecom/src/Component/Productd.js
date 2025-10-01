import { Link, useNavigate, useParams } from "react-router";
import { useApi } from "../useApi";

function Productd() {

   const navigate = useNavigate();
   const params = useParams();
   console.log(params.pid);

   const {products} = useApi(`http://localhost:3000/products/${params.pid}`);
   console.log(products);
   
   
  return (
    <>
    <p>Product detail</p>
    {/* <h2>{products.id}</h2>
    <h2>{products.name}</h2>
    <h2>{products.price}</h2>
    <h2>{products.category}</h2> */}
    
    <div className="card card1" style={{width:300}}>
        <img className="card-img-top img1" src={products.img} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{products.image} {products.name}</h4>
          <p className="card-text">{products.category}</p>
          <p className="card-text">₹ {products.price} </p>
          <Link href="#" className="btn btn-primary">Add to cart</Link>
          <button className="btn btn-primary" onClick={()=>
            setTimeout(()=>{
              navigate("/home")
            },3000)
          }>GoBack</button>
        </div>
    </div>
    </>
  )
}

export default Productd