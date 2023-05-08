input.onLogoEvent(TouchButtonEvent.Touched, function () {
    custom.playCharumera()
})
input.onButtonPressed(Button.A, function () {
    custom.left()
})
input.onGesture(Gesture.LogoUp, function () {
    custom.back()
})
input.onGesture(Gesture.LogoDown, function () {
    custom.forward()
})
input.onButtonPressed(Button.B, function () {
    custom.right()
})
custom.start()
