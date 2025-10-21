console.log("hello")


// if else conditionals
let a = 10;
let b = 20;
 if (a>6 & b>7)
    console.log(a+b);
 

 else
    console.log(a-b);

let x1 = 10;
if (x1 > 5) {
  console.log("x1 is greater than 5");
} else {
  console.log("x1 is not greater than 5");
}


// if else ladder

let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}
 
// Ternary Operator

let x2 = 10;
let y = 20;
let max;

max = (x2 > y) ? x2 : y;
/*
translates to:
if(x2 > y){
    let max = x2;
}
else{
    let max = y;
}
*/

console.log(max); // Outputs: 20