const sec = document.querySelector('.second-hand')
const min = document.querySelector('.min-hand')
const hour = document.querySelector('.hour-hand')


setInterval(setDate,1000)

function setDate() {
    const now = new Date()

    const mySec = now.getSeconds()

    const AngleSec = ((mySec / 60) * 360) + 90

    sec.style.transform = `rotate(${AngleSec}deg)`

    const myMin= now.getMinutes()

    const AngleMin = ((myMin / 60) * 360) + 90 + ((mySec / 60) * 6)

    min.style.transform = `rotate(${AngleMin}deg)`

    const myHour = now.getHours()

    const AngleHour = ((myHour / 12) * 360) + 90 +  ((myMin / 60) * 30)

    hour.style.transform = `rotate(${AngleHour}deg)`
}