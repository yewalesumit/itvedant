import React,{memo} from 'react'

const Memo1 = memo(({count}) => {
    console.log("Child Component Rendered");
    return <h2>Count:{count}</h2>
    
});

export default Memo1;