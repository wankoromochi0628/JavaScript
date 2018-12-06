function reload() {
    if (window.confirm("画面を再読み込みします。よろしいですか？")) {
        // Windowオブジェクトが自分自身を参照するwindowプロパティ
        window.location.reload();
    } else {
        console.log("再読み込みは実行されませんでした。")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('number').addEventListener('change', function() {
        let val = document.getElementById('number');
        location.href = 'file:///Users/y_suzuki/development/JavaScript/practice/chapter7/' + this.value;
    }, false)
}, false)