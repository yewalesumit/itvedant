function myFunction(){
    let x = document.getElementById('fname');
    x.value = x.value.toUpperCase();
}


const button = document.getElementsByClassName('btn');
button[0].addEventListener('click',removeClick)

function removeClick(){
    alert("Event Listener is removed");
    button[0].removeEventlistener('click',removeClick);
}