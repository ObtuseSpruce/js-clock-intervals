console.log('loaded!')

const secHand = document.getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')
const nowTime = new Date()
const dateHours= nowTime.getHours();
const dateMins = nowTime.getMinutes();
const dateSecs = nowTime.getSeconds();
let secDegs = (dateSecs * 6)
let minDegs = (dateMins * 6)
let hourDegs = (dateHours * 30)

const hourFunc = () => {
    if (dateHours > 12) {
        hourDegs = ((dateHours - 12) * 30)
    } else {
        hourDegs = dateHours * 30
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
        minHand.style.transform = "rotate(" + minDegs + "deg)";
        minDegs += 6
    }
}

const hourTick = () => {
        hourFunc()
        hourHand.style.transform = "rotate(" + hourDegs + "deg)";
}

setInterval(secTick, 1000)
minTick()
hourTick()
console.log(dateHours, dateMins, dateSecs)