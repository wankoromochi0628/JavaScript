// ブラウザーの種類/バージョンに応じてコードを分岐する。
var agent = window.navigator.userAgent.toLowerCase();

var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1) &&
    (agent.indexOf('opr') === -1);
console.log('Chrome :' + chrome);

var browser = document.getElementById('browser');
if (chrome) {
    browser.textContent = '現在お使いのブラウザはGoogle Chromeです。';
} else {
    browser.textContent = '現在お使いのブラウザはGoogle Chromeではありません。';
}

// 特定の機能の有無によってコードを分岐する。
var func = document.getElementById('func');

if (window.File) {
    func.textContent = 'ファイルをアップロードしました。'
} else {
    func.textContent = '現在お使いのブラウザではFile APIは使用できません。'
}