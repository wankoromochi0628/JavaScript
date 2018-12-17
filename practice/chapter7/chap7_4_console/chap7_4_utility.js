// group・groupEnd
document.getElementById('group').addEventListener('click', function(){
    console.group('上位グループ');
    for (var i =0; i < 3; i++) {
        // 子グループを開始
        console.group('下位グループ' + i);
        for (var j = 0; j < 3; j++) {
            console.log(i, j);
        }
        // 子グループを終了
        console.groupEnd();
    }

    console.groupEnd();
});

// groupCollapsed
document.getElementById('collapse').addEventListener('click', function(){
    console.groupCollapsed('上位グループ（collapsed）');
    for (var i =0; i < 3; i++) {
        // 子グループを開始
        console.groupCollapsed('下位グループ（Collapsed）' + i);
        for (var j = 0; j < 3; j++) {
            console.log(i, j);
        }
        // 子グループを終了
        console.groupEnd();
    }

    console.groupEnd();
});

// count
document.getElementById('count').addEventListener('click', function() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            console.count('LOOP');
        }
    }

    console.count('LOOP');
});

// timer
document.getElementById('timer').addEventListener('click', function() {
    console.time('MyTimer');
    window.alert('確認してください。');
    console.timeEnd('MyTimer');
})