console.log("Arrays")


var myArray = [1, "Hello", [2, 3]];

console.log(myArray.length); // length

myArray.push("hi") // push
console.log(myArray)

console.log(myArray.toString())  // string

console.log(myArray.pop()) // pop

console.log(myArray.shift()) // shift

console.log(myArray.unshift('aniket'))

console.log(myArray)

console.log(myArray.slice(1,3))  // slice

var myArray2 = [1, 3, 6, 7]
var myArray3 = ['hii', 8, 9] // concat
console.log(myArray.concat(myArray2,myArray3))
console.log(myArray)

console.log(myArray2.sort()) // sort

var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray); // [1, "Hello World", [4, 5], [2, 3]]

var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) { // loops in array
    console.log(myArray[i]);
}

var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) { // for each
    console.log(element);
});


var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) { // for of
    console.log(element);
}

var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function(element) {   // Map
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {    // reduce
    return acc + cur;
}, 0);
console.log(sum); // 15

var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {    // filter
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]


console.log(n.from("hello"))
