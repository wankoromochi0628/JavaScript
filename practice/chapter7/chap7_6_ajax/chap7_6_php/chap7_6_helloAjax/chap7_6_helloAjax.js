document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var result = document.getElementById('result');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    result.textContent = xhr.responseText;
                } else {
                    result.textContent = 'サーバーエラーが発生しました。';
                }
            } else {
                result.textContent = '通信中...';
            }
        };

        // サーバーとの非同期通信を開始
        // GET通信
        xhr.open('GET', 'chap7_6_helloAjax.php?name=' +
            encodeURIComponent(document.getElementById('name').value), true);
        xhr.send(null);

        // POST通信
        // xhr.open('POST', 'chap7_6_helloAjax.php', true);
        // xhr.setRequestHeader('content-type',
        //     'application/x-www-form-urlencoded;charset=UTF-8');
        // xhr.send('name' + encodeURIComponent(document.getElementById('name').value));
    }, false);
}, false);
