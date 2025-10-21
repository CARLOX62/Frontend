console.log("Loops")

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// for in loop

let person = {
  name: "John",
  age: 30,
  job: "developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for of loop

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

// while loop

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

let input = "";

while (input !== "yes" && input !== "no") {
  input = prompt("Please enter 'yes' or 'no':");
}