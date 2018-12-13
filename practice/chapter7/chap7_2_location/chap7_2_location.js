// hrefプロパティの実践
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let obj = document.getElementById('number');
        let val = obj.value;
        // ファイルサーバー実行時
        // location.href = 'file:///Users/y_suzuki/development/JavaScript/practice/chapter7/' + val;

        // 200 OK 実行時　（200OKの指定フォルダを chapter07 に指定
        location.href = 'http://127.0.0.1:8887/' + val;
    }, false)
}, false);

// pushStateメソッド
var count = 0;
var result = document.getElementById('result');
// カウントアップボタンを押した時に履歴を追加
document.getElementById('cnt').addEventListener('click', function() {
    result.textContent = ++count;
    history.pushState(count, null, 'chap7_2_location.html' + count);
});

// 戻るボタンでページの状態を前に戻す
window.addEventListener('popstate', function(e) {
    count = e.state;
    result.textContent = count;
});