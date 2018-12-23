// ローカルストレージ
var storage = localStorage;

// ストレージの保存
document.getElementById('save').addEventListener('click', function() {
    var txt1 = document.getElementById('text1').value;
    var txt2 = document.getElementById('text2').value;
    var txt3 = document.getElementById('text3').value;

    // 保存
    storage.setItem('item1', txt1);
    storage.item2 = txt2;
    storage['item3'] = txt3;

    // 取得
    // console.log(storage.getItem('item1'));
    // console.log(storage.item2);
    // console.log(storage['item3']);
});

// ストレージの取得
document.getElementById('out').addEventListener('click', function() {
    // 取得
    console.log(storage.getItem('item1'));
    console.log(storage.item2);
    console.log(storage['item3']);
});