// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Network response was not ok");
//     }
//     return response.json();

// })
// .then((data)=> console.log(data))
// .catch((error)=> console.error("Fetch error:",error));

async function fetchUserData(userId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        const user= await response.json();
        console.log(user);
        
    }catch(error){
        console.error("Error fetching user data:",error);
        
    }
}
fetchUserData(1);