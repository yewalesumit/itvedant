import { useRef,useState } from "react";

function Search(props){
    const[profile,setUsername] = useState('pranit');

    const  onsubmithandler = (event) => {
        event.preventDefault();

        console.log(username);
        props.onSearch(username)
        
    }
}