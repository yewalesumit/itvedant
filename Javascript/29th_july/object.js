// const person = {
//     name: "sumit",
//     age: 20,
//     gender: "male",

//     Greet() {
//         console.log(`I am ${this.name}, my age is ${this.age}`);
//     }
// }

// console.log(person.gender)
// person.Greet()


// const obj = {
//     name : "nawale",
//     age : 21,
//     company : function js(){
//         console.log("this keyword returns",this)
//     }

// }

// obj.company();

// const insta = {
//     username : 'demo@gmail.com',
//     password : 'Pass@123',
//     address : {
//         flat_no : 127,
//         near_by : 'Abc',
//         city : 'Pune'
//     },
//     followers : [
//         {name : 'vaibhav', url : 'vaibhav.jpg'},
//         {name : 'nawale', url : 'nawale.jpg'},
//         {name : 'pratik', url : 'pratik.jpg'}
//     ]

// }

// console.log(insta.username+' '+insta.password);
// console.log(insta.address.flat_no)
// let x = console.log(insta.followers[1].url)

// const insta = {
//     username: 'demo@gmail.com',
//     password: 'Pass@123',
//     address: {
//         flat_no: 127,
//         near_by: 'Abc',
//         city: 'Pune',

//         followers: [
//             { name: 'vaibhav', url: 'vaibhav.jpg' },
//             { name: 'nawale', url: 'nawale.jpg' },
//             { name: 'pratik', url: 'pratik.jpg' }
//         ]
//     },

// }

// console.log(insta.address.followers[2].url)

// const  user = {
//     name : "nawale",
//     age : 25,
//     address : {city:'Pune',zip:'411041'}
// };

// user.name = 'jaydip';
// user.address.city = 'sangamner';
// user.email = "demo@gmail.com";
// user["phone"] = '123-456-8790';

// console.log(user);


// function carFactory(name,model,color){
//     return {
//         name:name,
//         model:model,
//         color:color
//     }
// }

// console.log(carFactory("bmw","s1000rr","white"));

function carFactory(name,model,color){
    return {
        name,
        model,
        color
    }
}

console.log(carFactory("bmw","s1000rr","white"));