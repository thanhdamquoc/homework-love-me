let yesButton = document.getElementById("btn-yes");
let noButton = document.getElementById("btn-no");
yesButton.addEventListener("click", doYes);
noButton.addEventListener("mouseover", doNo);
function doYes() {
    alert("<3");
}
function doNo() {
    let randomLeft = getRandomArbitrary(0, window.innerWidth);
    let randomTop =  getRandomArbitrary(0, window.innerHeight);
    noButton.style.left = randomLeft + "px";
    noButton.style.top = randomTop + "px";
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}