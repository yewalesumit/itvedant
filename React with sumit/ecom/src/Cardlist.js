import React from 'react'
import Card from './Card';

function Cardlist(props) {

    const  products = props.products1;
    console.log(products);
    

  return (
    <>
        {
            products && products.map((p,ind)=>{
                return(<Card {...p} key={ind} /> )
            })
        }
    </>
  )
}

export default Cardlist