input.onLogoEvent(TouchButtonEvent.Touched, function () {
    custom.playCharumera()
})
input.onButtonPressed(Button.A, function () {
    custom.left()
    custom.soundEffect(SoundEffect.enter)
})
input.onGesture(Gesture.LogoUp, function () {
    custom.back()
    custom.soundEffect(SoundEffect.get2)
})
input.onGesture(Gesture.LogoDown, function () {
    custom.forward()
    custom.soundEffect(SoundEffect.cursor)
})
input.onButtonPressed(Button.AB, function () {
    custom.stop()
    custom.soundEffect(SoundEffect.effect1)
})
input.onButtonPressed(Button.B, function () {
    custom.right()
    custom.soundEffect(SoundEffect.get1)
})
custom.start()
