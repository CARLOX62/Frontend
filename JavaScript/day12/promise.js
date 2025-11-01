console.log("Day 12: JavaScript Basics");

let promise = new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
    script.onload = () => resolve(`Script loaded: ${script.src}`);
    script.onerror = () => reject(new Error(`Script load error for ${script.src}`));
    document.head.append(script);
});

promise.then((value) => {
    console.log(value);
    // You can now use the loaded script (lodash in this case)
    console.log('Lodash version:', _.VERSION);
}).catch((error) => {
    console.error(error);
});

promise.finally(() => {
    console.log("Script load attempt finished.");
});