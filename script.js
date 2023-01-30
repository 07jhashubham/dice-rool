let randomNumber1 = Math.random();
randomNumber1 = (Math.floor(randomNumber1 * 6) + 1);
let randomNumber2 = Math.random();
randomNumber2 = (Math.floor(randomNumber2 * 6) + 1);
let col1 = "images/dice" + randomNumber1 + ".png";
let col2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", col1);
document.querySelector(".img2").setAttribute("src", col2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Win";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Win";
}
else {
    document.querySelector("h1").textContent = "Draw";
}
