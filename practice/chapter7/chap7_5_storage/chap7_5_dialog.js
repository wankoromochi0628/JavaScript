window.addEventListener('storage', function(e) {
    console.log('--- ストレージの変更を検知 ---');
    console.log('変更されたキー；' + e.key);
    console.log('変更前の値；' + e.oldValue);
    console.log('変更後の値；' + e.newValue);
    console.log('発生元のページ；' + e.url);
}, false);

document.getElementById('update').addEventListener('click', function() {

});