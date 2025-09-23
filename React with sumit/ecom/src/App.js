import { useEffect, useState } from "react";

function App(){
    const [products,setProducts] = useState([]);
    const [cnt,setCnt] = useState(0);
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(res1=>setProducts(res1))
    },[])

    // const data = () =>{
    //     fetch('http://localhost:3000/products')
    //     .then(res=>res.json())
    //     .then(res1=>setProducts(res1))
    // }
    // data();

    console.log(products);
    
    return(
        <>
            <button onClick={()=>{
                setCnt(cnt+1)
            }}>Cnt</button>
        </>
    );
}

export default App