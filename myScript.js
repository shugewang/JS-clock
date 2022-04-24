const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.getElementById("sec-hand");


function getDegrees(currentVal, maxVal){
    const degrees = (currentVal/maxVal) * 360 + 90;
    return degrees;
}

function updateClock() {
    let time = new Date();
    console.log(time)
    let hourDegrees = getDegrees(time.getHours(), 12);
    let minDegrees = getDegrees(time.getMinutes(), 60);
    let secDegrees = getDegrees(time.getSeconds(), 60);
    
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    secHand.style.transform = `rotate(${secDegrees}deg)`;
}

setInterval(updateClock, 1000);

updateClock();