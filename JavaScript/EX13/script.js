function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Learn JavaScript in 1 Hour", "Programming with Mosh", 1500000, 12, "1:00:00", "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvUOZ3z4u9b6j6v1e3xX5X5kzEMA")
createCard("JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour", "Simplilearn", 950, 3, "1:00:00", "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvUOZ3z4u9b6j6v1e3xX5X5kzEMA")
createCard("JavaScript Crash Course for Beginners", "Traversy Media", 25000, 5, "1:45:00", "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvUOZ3z4u9b6j6v1e3xX5X5kzEMA")