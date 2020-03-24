console.log('loaded!')

const secHand = document.getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')
const nowTime = new Date()
const dateHours= nowTime.getHours();
const dateMinutes = nowTime.getMinutes();
const dateSeconds = nowTime.getSeconds();
let secDegs = (dateSeconds * 6)
let minDegs = (dateMinutes * 6)
let hourDegs = 0

const hourFunc = () => {
    if (dateHours > 12) {
        hourDegs = ((dateHours -12) * 30)
    } else {
        hourDegs = dateHours
    }
}

const secTick = () => {
    if (secDegs < 360) {
    secDegs += 6
    secHand.style.transform = "rotate(" + secDegs + "deg)";
    } else {
        minTick()
        secDegs = 0
        secDegs += 6
        secHand.style.transform = "rotate(" + secDegs + "deg)";
}
}

const minTick = () => {
    if (minDegs < 360) {
        minHand.style.transform = "rotate(" + minDegs + "deg)";
        minDegs += 6
    } else {
        hourTick()
        minDegs = 0
        minDegs += 6
        minHand.style.transform = "rotate(" + minDegs + "deg)";
    }
}

const hourTick = () => {
    hourFunc()
        hourHand.style.transform = "rotate(" + hourDegs + "deg)";
}

setInterval(secTick, 1000)
minTick()
hourTick()
hourFunc()
console.log(minDegs)