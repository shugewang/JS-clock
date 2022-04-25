// set global variables to HTML elements
const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");
const hourDigits = document.getElementById("digital-hour");
const minDigits = document.getElementById("digital-min");
const secDigits = document.getElementById("digital-sec");
const backgrounds = ["images/background00.jpg",
"images/background01.jpg", 
"images/background02.jpg", 
"images/background03.jpg", 
"images/background04.jpg", 
"images/background05.jpg", 
"images/background06.jpg", 
"images/background07.jpg"]

// get random background
function getBackground() {
    randomBackground = Math.floor(Math.random() * backgrounds.length);
    console.log(randomBackground);
    return `url(${backgrounds[randomBackground]}) #0075A2 no-repeat fixed center`;
}

window.addEventListener("load", function () {
    console.log(getBackground());
    document.body.style.background = getBackground();
    document.body.style.backgroundSize = "cover";
});

// calculate degrees to rotate
function getDegrees(currentVal, maxVal){
    const degrees = (currentVal/maxVal) * 360 + 90;
    return degrees;
}

// main function - update clock hands
function updateClock() {
    let time = new Date();
    let hourDegrees = getDegrees(time.getHours(), 12);
    let minDegrees = getDegrees(time.getMinutes(), 60);
    let secDegrees = getDegrees(time.getSeconds(), 60);
    
    console.log(time.getSeconds(), secDegrees);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    secHand.style.transform = `rotate(${secDegrees}deg)`;
}

// main function - update digital clock
function updateDigital() {
    let time = new Date();
    hourDigits.innerHTML = time.getHours();
    minDigits.innerHTML = time.getMinutes();
    secDigits.innerHTML = time.getSeconds();
}

document.getElementById("digital-clock").style.display = "none";

document.getElementById("toggle").addEventListener("click", function () {
    if (document.getElementById("toggle").innerHTML == "DIGITAL") {
        document.getElementById("analogue-clock").style.display = "none";
        document.getElementById("digital-clock").style.display = "flex";
        document.getElementById("toggle").innerHTML = "ANALOGUE";
    } else {
        document.getElementById("analogue-clock").style.display = "flex";
        document.getElementById("digital-clock").style.display = "none";
        document.getElementById("toggle").innerHTML = "DIGITAL";
    }
})

// call main function every second
setInterval(updateClock, 1000);
updateClock();

setInterval(updateDigital, 1000);
updateDigital();