// hrefプロパティの実践
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let obj = document.getElementById('number');
        let val = obj.value;
        location.href = 'file:///Users/y_suzuki/development/JavaScript/practice/chapter7/' + val;
    }, false)
}, false);

// pushStateメソッド
var count = 0;
var result = document.getElementById('result');
// カウントアップボタンを押した時に履歴を追加
document.getElementById('cnt').addEventListener('click', function() {
    result.textContent = ++count;
    history.pushState(count, null, '/js/chap07/count/' + count);
});

// 戻るボタンでページの状態を前に戻す
window.addEventListener('popstate', function(e) {
    count = e.state;
    result.textContent = count;
});