// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Slept for 2 seconds");
//         }, 2000);
//     });
// }
function sum(a, b, c) {
    return a + b + c;
}
(async function main() {
    
// let result = await sleep();
// console.log(result);
// let result2 = await sleep();
// console.log(result2);

// let [result1, result2,...rest] = [1,2,3,4,5,]
// console.log(result1,result2,rest);
// // console.log(result2);

let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

let {name, age, ...rest} = obj;
console.log(name, age, rest);

let arr = [4,5,6];
console.log(sum(...arr));


})();