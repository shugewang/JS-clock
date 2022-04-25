// set global variables to HTML elements
const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");
const hourDigits = document.getElementById("digital-hour");
const minDigits = document.getElementById("digital-min");
const secDigits = document.getElementById("digital-sec");


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