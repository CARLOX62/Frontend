console.log("Day 12: JavaScript Basics");
console.log("Hello, World!");

setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, src);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);   
    
}
