import React, { useEffect,useState } from 'react';

export const useApi = (url) => {

    const  [products,setProducts] = useState([]);


    const [loading,setLoading] = useState(true);

    useEffect(()=>{
            setLoading(true)
            fetch(url)
            .then((d)=>d.json())
            .then(res=>setProducts(res))
            .finally(()=>setLoading(false))
        },[url]);

    console.log(products);

  return {products,loading};
}
