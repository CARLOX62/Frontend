// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Harry", "Hermione", "Ron", "Luna", "DracoMalfoy", "CedricDiggory", "AlbusDumbledore"];

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push({ name: student, house: "Gryffindor" });
    }
    else if (student.length < 8) {
        houses.push({ name: student, house: "Hufflepuff" });
    }
    else if (student.length < 12) {
        houses.push({ name: student, house: "Ravenclaw" });
    }
    else {
        houses.push({ name: student, house: "Slytherin" });
    }
}

console.log(houses);


// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function doubleTrouble(arr) {
    if (!arr.length) return [];

    const result = [];
    let prev = null;

    for (let num of arr) {
        if (num !== prev) {
            result.push(num * 2);
        }
        prev = num;
    }

    return result;
}

console.log(doubleTrouble([2, 2, 3, 4, 4, 4, 5]));
console.log(doubleTrouble([1, 1, 1, 2, 3, 3, 4]));
console.log(doubleTrouble([]));
console.log(doubleTrouble([5, 5, 6, 6, 7]));


// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function mirrorMirror(str) {
    const reversed = str.split('').reverse().join('');
    return str + reversed;
}
console.log(mirrorMirror("hello"));
console.log(mirrorMirror("abc"));
console.log(mirrorMirror("12345"));



// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


function passwordValidator(password) {
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const digitCheck = /\d/.test(password);
    return lengthCheck && uppercaseCheck && lowercaseCheck && digitCheck;
}

console.log(passwordValidator("Password1"));
console.log(passwordValidator("pass"));
console.log(passwordValidator("PASSWORD123"));
console.log(passwordValidator("Pass123"));


// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumSelector(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) {
            break;
        }
        sum += num;
    }
    return sum;
}
console.log(sumSelector([1, 2, 3, -1, 4, 5]));
console.log(sumSelector([10, 20, 30]));
console.log(sumSelector([-5, 1, 2, 3]));


// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(vowelCounter("Hello World"));
console.log(vowelCounter("JavaScript is fun"));
console.log(vowelCounter("XYZ"));


