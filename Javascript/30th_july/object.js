// let obj = { name : "Nawale",age : 21,gender : "male"}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// let person = {
//     name:"John",
//     greet:function(){
//         console.log("Hello,"+this.name);
//     }
// };
// person.greet();


// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// let person1 = new Person("John",30);
// let person2 = new Person("don",25);

// console.log(person1);
// console.log(person2);

// const myObject = {
//     name : "john",
//     age : 30
// }

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// const myPerson = new Person("john",30)

// console.log(myPerson)

// Person.age=31;
// Person["name"]="jane";

// const myObject = { name: "john", age: 30 }
// delete myObject.age;
// console.log(myObject);

// myObject.gender='male';
// console.log(myObject);

// for(const p in myObject){
//     console.log(`${p}:${myObject[p]}`);

// }

// let fruits = ["apple","banana","cherry","pineapple","papaya"]

// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// };

// for(const p in fruits){
//      console.log(`${p}:${fruits[p]}`);
// }

// let  matrix = [[1,2,3],[4,5,6],[7,8,9]];

// console.log(matrix[0][1]);

// for(const p in matrix){
//     console.log(`${p}:${matrix[p[0]]}`)
// }

// let arr = [];
// arr.push(10)
// arr.push(20)

// console.log(arr)

let arr =[10,20,30,40,50];
let index = 2;
arr.unshift(0);
let a = arr.at(index);


// console.log(a);
// console.log(arr);

// let b = arr.includes(50)
// console.log(b);

// let found = arr.find(num => num === 30);
// console.log(found);


// console.log(arr.length)
// console.log(typeof(arr));

arr.forEach(function(ar){
    console.log(ar);
})
 