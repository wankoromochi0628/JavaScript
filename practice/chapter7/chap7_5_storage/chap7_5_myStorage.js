var MyStorage = function(app) {
    // アプリ名
    this.app = app;

    //利用するストレージの種類（ここではローカルストレージ）
    this.storage = localStorage;

    // ストレージから読み込んだオブジェクト
    // 該当するデータがない場合は、空のオブジェクトを生成
    this.data = JSON.parse(this.storage[this.app] || '{}');
}