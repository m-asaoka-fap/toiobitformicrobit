/*
 * toio:bit for micro:bit customblocks
 *
 * Copyright © 2023 FAP. All rights reserved.
 *
 * 2023.05.08  (FAP)m-asaoka  新規作成
 *
 */
/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon="" block="toio:bit"
namespace custom {
    let bInit = false;          // 初期化完了かどうか
    let defaultThrottle = 10;   // デフォルトのストットル値
    /**
    *  Toioを使うための設定を行います
    */
    //% block="Toioをはじめる"
    //% group="設定（せってい）"
    export function start(): void {
        // シリアル通信をセットアップする
        serial.redirect(
            SerialPin.P8,
            SerialPin.P12,
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
    *  文字列をシリアル通信ポートに送信します
    */
    export function sendText(sendText:string) {
        serial.writeString(sendText);
    } 
    
    
}
