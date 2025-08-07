let  arr = [1,2,3,4,5,6,7,8,9]

// arr.map((elt)=> {if(elt % 2 == 1){
//     console.log(elt);
    
// }})

// let x = arr.filter((elt)=> {if(elt % 2 == 0)} )

// console.log(x);

// const num = arr.reduce((x,y)=> x+y,0);
// console.log(num);

// const mul = arr.reduce((x,y)=> x*y,1);
// console.log(mul);


// for(const num of arr){
//     console.log(num);
// }

// for(const num in arr){
//     console.log(num);
// }

// for(const num in arr){
//     console.log(num);
//     console.log(arr.at(num));
//     console.log(arr[num]);
// }


// for(const num of arr){
//     console.log(num);
//     console.log(arr.indexOf(num));
    
// }

// array = [10,20,450,30,11,23];
// const[var1,var2,...others] = array;
// console.log(var1);
// console.log(var2);
// console.log(others);

// let a = [1,34,5,6,7,78,8,8];
// let b = [2,34,5,6,7,9,5,7,8];

// let combinedArray = [a,b];
// let combinedArrayUsingRest = [...a,...b];

// console.log(combinedArray);
// console.log(combinedArrayUsingRest);

// function greeting(message,...names){
//     console.log(message);
//     console.log(names);
// }

// greeting('Hello','nawale','jaydip','avinash');

const myPromise = new Promise((resolve,reject) => {
 let success = true;
 if(success){
    resolve("Operation Succeeded");
 }else{
    reject("Operation failed")
 }
});

myPromise
.then((result)=> console.log(result))
.catch((error)=>console.error(error))
.finally(console.log('The End'))



 