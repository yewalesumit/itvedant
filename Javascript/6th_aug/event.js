let pr = document.getElementById('parent');
pr.addEventListener('click',() => {
    alert("parent")
},
{capture:true})

let ch = document.getElementById('child');
ch.addEventListener('click',(e) => {
    alert("child")
    e.stopImmediatePropagation();
});


document.getElementById('link').addEventListener('click',(e)=>{
    e.preventDefault();
    alert('Default Prevented')
})