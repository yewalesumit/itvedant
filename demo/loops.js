// For loop

// for (let i=0; i<5; i++) {
//     console.log('Hello World!')
// }

// for (let i=1; i<=10; i++) {
//     let j=17;
//     j *= i;
//     console.log(j);
// }

// while loop

// let i =10;
// while(i>=1){
//     console.log( `17 * ${i} = ${17*i}` )
//     i--;
// }

// do-while loop

// let i =1 ;
// do{
//     console.log(`${17*i}`);
//     i += 1;
// }while(i<=10)

// let i =1 ;
// let a =17 ;
// do{
//     console.log(`${a*i}`);
//     i += 1;
// }while(i<=10)

// let x = prompt("Enter first number:");
// let y = prompt("Enter second number:");

// let z = x/y ;

// let c = alert(`Division of two number is: ${z}`)


// Factorial


// let n = prompt("Enter number:")
// if (){
//     x = n * factorial(n - 1);
//     console.log(x)
// }

let n = prompt("Enter number:")
let n1 = 0;
let n2 = 1;
let n3;
console.log(n1);
console.log(n2);

for(let i=3; i<=n; i++){
    n3 = n1 + n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}
