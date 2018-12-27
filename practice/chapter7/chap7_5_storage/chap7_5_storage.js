// ローカルストレージ
var storage = localStorage;

// ストレージの保存
document.getElementById('save').addEventListener('click', function() {
    let txt1 = document.getElementById('text1').value;
    let txt2 = document.getElementById('text2').value;
    let txt3 = document.getElementById('text3').value;

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

// removeItemメソッド
document.getElementById('remove').addEventListener('click', function() {
    storage.removeItem('item1');
});

// delete演算子
document.getElementById('delete').addEventListener('click', function() {
    delete storage.item2;
    delete storage['item3'];
});

// clearメソッド
document.getElementById('clear').addEventListener('click', function() {
    storage.clear();
});

// 全て取得する
document.getElementById('all').addEventListener('click', function() {
    for (var i = 0; i < storage.length; i++) {
        let k = storage.key(i);
        let v = storage[k];
        console.log(k + ':' + v);
    }
});

// オブジェクト保存
document.getElementById('objSave').addEventListener('click', function(){
    let txt1 = document.getElementById('obj1').value;
    let txt2 = document.getElementById('obj2').value;
    let txt3 = document.getElementById('obj3').value;

    let items = {item1: txt1, item2: txt2, item3: txt3 };
    storage.setItem('items', JSON.stringify(items));

    console.log(items);
    console.log(storage.items)
});

// オブジェクト取得
document.getElementById('objOut').addEventListener('click', function(){
    let data = JSON.parse(storage.getItem('items'));

    console.log('--- オブジェクト ---');
    console.dir(data);
    console.log('--- オブジェクト内のデータ ---');
    console.log(data.item1);
    console.log(data.item2);
    console.log(data.item3);
});