let button = document.getElementById("btn");

button.addEventListener("dblclick", function() {
    let box = document.querySelector(".box");
    box.style.backgroundColor = "blue";
    document.querySelector(".box").innerHTML = "<b>You clicked me!</b> enjoy!!!";
    box.style.color = "white";
    box.style.padding = "20px";
    box.style.textAlign = "center";
    box.style.fontSize = "24px";
    box.style.borderRadius = "10px";})

button.addEventListener("contextmenu", function() {    
    alert("Right Click is disabled on this button!");
});