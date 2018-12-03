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
    var timer = window.setInterval(
        // 現在の時刻を<div id='result'>要素に表示 (5000ミリ秒ごとに更新)
        function() {
            var dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        }, 5000);

        // ボタンクリック時にタイマー処理を中止
        document.getElementById('btn').addEventListener('click', function() {
            window.clearInterval(timer);
        }, false)
}, false);