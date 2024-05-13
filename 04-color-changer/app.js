let body = document.body;
let buttonRed = document.querySelector(".red");
let buttonGreen = document.querySelector(".green");
let buttonBlue = document.querySelector(".blue");
let buttonRandom = document.querySelector(".random");

buttonRed.addEventListener("click", () => changeBackground("red"), false);
buttonGreen.addEventListener("click", () => changeBackground("green"), false);
buttonBlue.addEventListener("click", () => changeBackground("blue"), false);
buttonRandom.addEventListener("click", () => changeBackground("random"), false);

// function changeToRed() {
//     body.style.backgroundColor = "red";
// }

// function changeToGreen() {
//     body.style.backgroundColor = "green";
// }

// function changeToBlue() {
//     body.style.backgroundColor = "blue";
// }

function changeBackground(color) {
    if (color == "random") {
        body.style.backgroundColor = randomColor();
    } else {
        body.style.backgroundColor = color;
    }
}

function randomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}