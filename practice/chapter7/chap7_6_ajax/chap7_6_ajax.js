// dummy処理
document.getElementById('btnDummy').addEventListener('click', function() {
    var dummy = document.getElementById('pDummy');

    dummy.textContent = document.getElementById('txtDummy').value;
}, false);

// Ajax
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hello').addEventListener('click', function() {
        const CHAP = document.getElementById('chapter').value;
        var id = document.getElementById('id');
        var title = document.getElementById('title');
        var author = document.getElementById('author');
        var resId = document.getElementById('resId');
        var resTitle = document.getElementById('resTitle');
        var resAuthor = document.getElementById('resAuthor');

        // ①XMLHttpRequestオブジェクトを生成
        var xhr = new XMLHttpRequest();

        // ②サーバー通信時の処理を定義
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    id = xhr.response.id;
                    title = xhr.response.title;
                    author = xhr.response.author;
                    resId.textContent = "チャプター" + id + "の内容は";
                    resTitle.textContent = title + "です。";
                    resAuthor.textContent = "進行役は" + author + "さんです。";
                } else {
                    // result.textContent = 'サーバーエラーが発生しました。';
                    resId.textContent = 'サーバーエラーが発生しました。';
                }
            } else {
                // result.textContent = '通信中...';
                resId.textContent = "通信中...";
            }
        };

        // ③非同期通信を開始
        xhr.open('GET', ' http://localhost:3000/posts/' + CHAP, true);
        xhr.responseType = "json";
        xhr.send("");

    }, false);
}, false);

// JSONP
document.getElementById('btn').addEventListener('click', function() {
    // サービスへの問い合わせURLを生成
    var url = "http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=" + encodeURIComponent(document.getElementById('url').value);

    // サービスからJavaScriptのコードを受け取るための<script>要素を生成
    var scr = document.createElement('script');
    scr.src = url;
    document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {
    if (data === null) {
        result.textContent = 'ブックマークは存在しませんでした。';
    } else {
        // ブックマークが取得できた場合、ユーザーをリスト表示
        var bms = data.bookmarks;
        var ul = document.createElement('ul');

        for (var i = 0; i < bms.length; i++) {
            // <li>、<a>要素、テキストを生成（<a>要素にはhref属性を設定）
            var li = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
            var text = document.createTextNode(
                bms[i].user + '' + bms[i].comment);
            // テキスト→<a>→<li>→<ul>の順にノードを組み立て
            anchor.appendChild(text);
            li.appendChild(anchor);
            ul.appendChild(li);
        }

        result.appendChild(ul);
    }
}

// クロスドキュメントメッセージング
