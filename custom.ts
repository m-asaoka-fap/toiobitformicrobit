/*
 * toio:bit for micro:bit customblocks
 *
 * Copyright © 2023 FAP. All rights reserved.
 *
 * 2023.05.08  (FAP)m-asaoka  新規作成
 *
 */
/* プリセットされた音 */
enum SoundEffect {
    //% block="0(Enter)"
    enter = 0,
    //% block="1(selected)"
    selected = 1,
    //% block="2(cancel)"
    cancel = 2,
    //% block="3(cursor)"
    cursor = 3,
    //% block="4(matin)"
    matin = 4,
    //% block="5(matout)"
    matout = 5,
    //% block="6(get1)"
    get1 = 6,
    //% block="7(get2)"
    get2 = 7,
    //% block="8(get3)"
    get3 = 8,
    //% block="9(effect1)"
    effect1 = 9,
    //% block="10(effect2)"
    effect2 = 10
}
/* Waitする時間 */
enum WaitTime {
    //% block="1秒（びょう）"
    WAIT1 = 1000,
    //% block="5秒（びょう）"
    WAIT2 = 5000,
    //% block="10秒（びょう）"
    WAIT3 = 10000,
    //% block="30秒（びょう）"
    WAIT4 = 30000,
    //% block="60秒（びょう）"
    WAIT5 = 60000
}
/* モーター回転数*/
enum ThrottleKind {
    //% block="10"
    TH10 = 10,
    //% block="15"
    TH15 = 15,
    //% block="20"
    TH20 = 20,
    //% block="25"
    TH25 = 25,
    //% block="30"
    TH30 = 30,
    //% block="35"
    TH35 = 35,
    //% block="40"
    TH40 = 40,
    //% block="45"
    TH45 = 45,
    //% block="50"
    TH50 = 50,
    //% block="55"
    TH55 = 55,
    //% block="60"
    TH60 = 60,
    //% block="65"
    TH65 = 65,
    //% block="70"
    TH70 = 70,
    //% block="75"
    TH75 = 75,
    //% block="80"
    TH80 = 80,
    //% block="85"
    TH85 = 85,
    //% block="90"
    TH90 = 90,
    //% block="95"
    TH95 = 95,
    //% block="100"
    TH100 = 100
}
/**
 * カスタムブロック
 */
//% weight=0 color=#0fbc11 icon="" block="toio:bit"
namespace custom {
    let bInit = false;                         // 初期化完了かどうか
    let defaultThrottle = ThrottleKind.TH10;   // デフォルトのストットル値
    /**
    *  Toioを使うための設定を行います
    */
    //% block="Toioをはじめる"
    //% group="設定（せってい）"
    export function start(): void {
        // シリアル通信をセットアップする
        serial.redirect(
            SerialPin.P12,
            SerialPin.P0,
            BaudRate.BaudRate57600
        )
        bInit = true;
    }
    /**
    *  真っすぐ前に進みます
    */
    //% block="↑"
    //% group="レベル１"
    export function forward(): void {
        if (bInit != true) {
            return;
        }
        let strThrottle = convertToText(defaultThrottle);
        let strSendTxt = "forward=" + strThrottle;
        sendText(strSendTxt);
    }
    /**
    *  真っすぐ後ろに進みます
    */
    //% block="↓"
    //% group="レベル１"
    export function back(): void {
        if (bInit != true) {
            return;
        }
        let strThrottle = convertToText(defaultThrottle);
        let strSendTxt = "back=" + strThrottle;
        sendText(strSendTxt);
    }
    /**
    * 右に回転します
    */
    //% block="→"
    //% group="レベル１"
    export function right(): void {
        if (bInit != true) {
            return;
        }
        let strThrottle = convertToText(defaultThrottle);
        let strSendTxt = "right=" + strThrottle;
        sendText(strSendTxt);
    }
    /**
    * 左に回転します
    */
    //% block="←"
    //% group="レベル１"
    export function left(): void {
        if (bInit != true) {
            return;
        }
        let strThrottle = convertToText(defaultThrottle);
        let strSendTxt = "left=" + strThrottle;
        sendText(strSendTxt);
    }
    /**
    * 停止します
    */
    //% block="×"
    //% group="レベル１"
    export function stop(): void {
        if (bInit != true) {
            return;
        }
        let strSendTxt = "stop";
        sendText(strSendTxt);
    }
    /**
    * チャルメラ♪
    */
    //% block="♪ちゃるめら♪"
    //% group="レベル１"
    export function playCharumera(): void {
        if (bInit != true) {
            return;
        }
        let strSendTxt = "playcharumera";
        sendText(strSendTxt);
    }
    /**
    * 効果音（こうかおん）を設定（せってい）するよ
    */
    //% block="効果音（こうかおん） %value がなる"
    // SoundEffect.defl = SoundEffect.enter
    //% group="レベル１"
    export function soundEffect(effect:SoundEffect): void {
        if (bInit != true) {
            return;
        }
        let strEffectType = convertToText(effect);
        let strSendTxt = "presetsound=" + strEffectType;
        sendText(strSendTxt);
    }
    /**
    *  文字列をシリアル通信ポートに送信します
    */
    export function sendText(sendText:string) {
        serial.writeLine(sendText);
    } 
}
