document.getElementById('log').addEventListener('click', function() {
    console.log('一般的なログ');
});

document.getElementById('info').addEventListener('click', function() {
    console.info('一般的な情報');
});

document.getElementById('warn').addEventListener('click', function() {
    console.warn('警告');
});

document.getElementById('err').addEventListener('click', function() {
    console.error('エラーメッセージ');
});

document.getElementById('other').addEventListener('click', function() {
    // console.log(console);
    console.table(console);
});