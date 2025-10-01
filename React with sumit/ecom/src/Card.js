import { Link } from "react-router-dom";




function Card(props) {

  return (
    <>
      <div className="card card1" style={{width:300}}>
        <img className="card-img-top img1" src={props.img} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{props.image} {props.name}</h4>
          <p className="card-text">{props.category}</p>
          <p className="card-text">₹ {props.price} </p>
          <a href="#" className="btn btn-primary">Add to cart</a>
          <Link to={`/product/${props.id}`}>readmore</Link>
        </div>
      </div>
    </>
  );
}

export default Card;
