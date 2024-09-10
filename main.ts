input.onButtonPressed(Button.A, function () {
    posizione_orizzontale = posizione_orizzontale + 1
})
input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.unplot(i, j)
        }
    }
    posizione_orizzontale = 0
    posizione_verticale = 0
})
input.onButtonPressed(Button.AB, function () {
    posizione_orizzontale = 0
    posizione_verticale = 0
})
input.onButtonPressed(Button.B, function () {
    posizione_verticale = posizione_verticale + 1
})
let posizione_verticale = 0
let posizione_orizzontale = 0
led.enable(true)
posizione_orizzontale = 0
posizione_verticale = 0
basic.forever(function () {
    led.plot(posizione_orizzontale, posizione_verticale)
})
