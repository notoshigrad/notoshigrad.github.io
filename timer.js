//タイマー表示要素を取得
const min = document.getElementById("min");
const sec = document.getElementById("sec");

//カウントの秒数
let count = 620;

//分に変換
let minuteCount = Math.floor(count / 60);
//秒に変換
let secondCount = count - (Math.floor(count / 60) * 60);

//変換した分と秒を要素に表示
min.textContent = `${minuteCount}:`;
sec.textContent = `${secondCount}`;

//ページロードで処理を行う
document.addEventListener("DOMContentLoaded", () => {
    //一定時間おきに行いたい関数を宣言
    function countDown() {
        if(count > 0) {
            //countが0より大きい場合はcountを1ずつ減らす
            count--;
            //分に変換
            let minuteCount = Math.floor(count / 60);
            //秒に変換
            let secondCount = count - (Math.floor(count / 60) * 60);
            //タイマー表示要素にcountの数値を表示
            min.textContent = minuteCount >= 10 ? `${minuteCount}:` : `0${minuteCount}:`;
            sec.textContent = secondCount >= 10 ? `${secondCount}` : `0${secondCount}`;
        } else {
            //countが0以下になったら0分0秒を表示して、処理を停止させる
            min.textContent = "00:";
            sec.textContent = "00";
            console.log("タイマーが停止しました");
            clearInterval(countDownTimer);
        }
    }
    //1000ミリ秒（1秒）ごとに、countDown関数を実行
    //定数countDownTimerに、intervalIDを格納している
    const countDownTimer = setInterval(countDown,1000);
}
);
