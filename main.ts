input.onLogoEvent(TouchButtonEvent.Touched, function () {
    custom.playCharumera()
})
input.onButtonPressed(Button.A, function () {
    custom.setthrottle(ThrottleKind.TH40)
    custom.left()
    custom.soundEffect(SoundEffect.get1)
    custom.waittime(WaitTime.WAIT2)
    custom.stop()
    custom.soundEffect(SoundEffect.enter)
})
input.onGesture(Gesture.LogoUp, function () {
    custom.back()
    custom.soundEffect(SoundEffect.effect1)
})
input.onGesture(Gesture.LogoDown, function () {
    custom.forward()
    custom.soundEffect(SoundEffect.effect2)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    custom.right()
    custom.soundEffect(SoundEffect.get2)
})
custom.start()
custom.setthrottle(ThrottleKind.TH50)
