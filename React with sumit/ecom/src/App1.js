

import React, { useEffect,useState } from 'react'
import Cardlist from './Cardlist';
import { useApi } from './useApi';


function App1() {

    // const  [products,setProducts] = useState([]);
    const[url,setUrl] = useState('http://localhost:3000/products');
    
    const{products,loading} = useApi(url);

    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(res1=>setProducts(res1))
    // },[url])

    console.log(products);
    
  return (
    <>
    <div id='btn1'>
        <button className='btn b1 btn-success'onClick={()=>setUrl('http://localhost:3000/products')}>All products</button>
        <button className='btn b1 btn-danger' onClick={()=>setUrl('http://localhost:3000/products?category=mobile')}>Mobile</button>
        <button className='btn b1 btn-primary'onClick={()=>{setUrl('http://localhost:3000/products?category=laptop')}}>Laptop</button>
        <button className='btn b1 btn-warning' onClick={()=>{setUrl('http://localhost:3000/products?category=watch')}}>Watch</button>
        <button className='btn b1 btn-info' onClick={()=>{setUrl('http://localhost:3000/products?category=tv')}}>Tvs</button>


    </div>
    {
        
        loading && <><div className="spinner-border"></div><span>Loading...</span></>
    }
    <div className='c'><Cardlist products1 = {products} /></div>
    </>
  )
}

export default App1