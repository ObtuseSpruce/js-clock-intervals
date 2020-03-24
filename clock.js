console.log('loaded!')

const secHand = document.getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')
const nowTime = Date.now()
let secDegs = 0
let minDegs = 0
let hourDegs = 0

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
    if (hourDegs < 360){
    hourHand.style.transform = "rotate(" + hourDegs + "deg)";
    hourDegs += 30
    } else {
        console.log("?????")
    }
}

setInterval(secTick, 1000)
minTick()
hourTick()
console.log(nowTime)