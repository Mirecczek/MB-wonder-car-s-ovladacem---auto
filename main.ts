radio.onReceivedString(function (receivedString) {
    if (receivedString == "UP") {
        wuKong.mecanumRun(wuKong.RunList.Front)
    } else if (receivedString == "DOWN") {
        wuKong.mecanumRun(wuKong.RunList.rear)
    } else if (receivedString == "LEFT") {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, -50)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, -50)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 50)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 50)
    } else if (receivedString == "RIGHT") {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 50)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, 50)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, -50)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, -50)
    } else if (receivedString == "0") {
        wuKong.mecanumRun(wuKong.RunList.stop)
    } else if (receivedString == "GREEN") {
        wuKong.mecanumDrift(wuKong.TurnList.Left)
    } else if (receivedString == "RED") {
        wuKong.mecanumRun(wuKong.RunList.left)
    } else if (receivedString == "BLUE") {
        wuKong.mecanumDrift(wuKong.TurnList.Right)
    } else if (receivedString == "YELLOW") {
        wuKong.mecanumRun(wuKong.RunList.right)
    } else if (receivedString == "PRESS") {
    	
    } else if (receivedString == "HORN") {
        music.playMelody("G A C E C5 - - - ", 120)
    } else if (receivedString == "LIGHT") {
        if (SVETLO == 0) {
            SVETLO = 1
        } else {
            SVETLO = 0
        }
    }
    if (SVETLO == 1) {
        SVITI = randint(0, 255)
        strip.showRainbow(1, 360)
    }
})
let SVITI = 0
let strip: neopixel.Strip = null
let SVETLO = 0
radio.setGroup(15)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
SVETLO = 0
wuKong.setLightMode(wuKong.LightMode.BREATH)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
