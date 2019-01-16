function reload() {
    if (window.confirm("画面を再読み込みします。よろしいですか？")) {
        // Windowオブジェクトが自分自身を参照するwindowプロパティ
        window.location.reload();
    } else {
        console.log("再読み込みは実行されませんでした。")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // タイマー設置
    // setInterval : 一定間隔ごとに処理を実行
    // setTimeout : 時間経過で一回のみ実行
    var timerInterval = window.setInterval(
    // var timer = window.setTimeout(
    // 現在の時刻を<div id='result'>要素に表示 (5000ミリ秒ごとに更新)
    function() {
        var dat = new Date();
        document.getElementById('resInterval').textContent = dat.toLocaleTimeString();
    }, 5000);

    // ボタンクリック時にタイマー処理を中止
    document.getElementById('btnInterval').addEventListener('click', function() {
        window.clearInterval(timerInterval);
    }, false)

    var timerOut = window.setTimeout(
    // 現在の時刻を<div id='result'>要素に表示 (5000ミリ秒ごとに更新)
    function() {
        var dat = new Date();
        document.getElementById('resTimeOut').textContent = dat.toLocaleTimeString();
    }, 5000);

}, false);