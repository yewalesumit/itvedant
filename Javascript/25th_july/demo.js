let num = 15;
let temp = Math.abs(num);  // convert to positive

while (true) {
    if (temp === 0) {
        console.log("even");
        break;
    } else if (temp === 1) {
        console.log("odd");
        break;
    } else {
        temp -= 2;
    }
}
