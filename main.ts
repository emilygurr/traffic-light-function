function close_red_light () {
    // 要注意紅燈需要關閉, 所以先把p16p0 為0
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function open_green_light () {
    // 綠燈需要開啟,p12為1,p8為0
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function countdown12s () {
    // 這裡用了2個for loops, 為了在倒數3秒後才閃綠燈,所以在12秒至4秒的時間只需要維持倒數,12-8=4 所以from 0 to 812
    for (let index = 0; index <= 12; index++) {
        // 12秒倒數
        basic.showNumber(12 - index)
        basic.pause(1000)
    }
}
function countdown10s () {
    // for loops 是由0開始到10 , 而變數會儲存到index 上
    for (let index = 0; index <= 10; index++) {
        // 我們需要在micro:bit 上顯示倒數時間, 而index 是由0開始, 所以我們以10和index相減, 得出倒數
        basic.showNumber(10 - index)
        // 為了倒數時間準確, 所以用了1000ms (1秒)來控制
        basic.pause(1000)
    }
}
function open_red_light () {
    // 紅燈電線插到p16和p0, 一開始紅燈會亮燈。
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function close_green_light () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
// 顯示R (red light) ,檢查micro:bit 是否有電源。
basic.showString("R")
open_red_light()
// 用white loops 可做到不停檢查是否按下A掣
while (true) {
    // 如果按下button A 時, 便會進行以下動作。
    if (input.buttonIsPressed(Button.A)) {
        countdown10s()
        // 顯示 G (green light)
        basic.showString("G")
        close_red_light()
        open_green_light()
        countdown12s()
        // 顯示R 回到初始
        // 紅燈開啟 綠燈關閉
        //                                             
        basic.showString("R")
        open_red_light()
        close_green_light()
    }
}
