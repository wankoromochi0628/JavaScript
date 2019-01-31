// Promiseオブジェクトの基本
document.getElementById('btn').addEventListener('click', function() {
    let text = document.getElementById('text').value;
    let res = document.getElementById('response');

    // Fullfilled状態の場合：then
    // Rejected状態の場合：catch
    asyncProcess(text).then(
        // 成功した時に（resolve関数によって）実行される処理
        response => {
            res.textContent = response;
        }
    ).catch(
        // 失敗した時に（reject関数によって）実行される処理
        error => {
            res.textContent = `エラー：${error}`;
        }
    )
    ;

});

// ①非同期処理を関数としてまとめておく
function asyncProcess(value) {

    // ②コンストラクターに実行すべき処理を記述
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 引数valueが未定義であるかどうかによって成否を判定
            if (value) {
                // Fullfilled状態になる
                resolve(`入力値：${value}`);
            } else {
                // Rejected状態になる
                reject('入力値は空です');
            }
        });
    });
}

// 非同期処理を連結
document.getElementById('btn2').addEventListener('click', function() {
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let res1 = document.getElementById('response1');
    let res2 = document.getElementById('response2');

    asyncProcess(text1).then(
        response => {
            console.log(response);
            res1.textContent = response;
            // 初回の実行に成功したら、2回目のasyncProcess関数を実行
            return asyncProcess(text2);
        }
    ).then(
        response => {
            console.log(response);
            res2.textContent = response;
        }
    ).catch(
        error => {
            res1.textContent = `エラー：${error}`;
        }
    )
    ;
});

// 全ての非同期処理が成功した場合にコールバックする - allメソッド -
document.getElementById('btn3').addEventListener('click', function() {
    let animal = document.getElementById('animal').value;
    let food = document.getElementById('food').value;
    let season = document.getElementById('season').value;
    let resAll = document.getElementById('responseAll');

    Promise.all([
        asyncProcess(animal),
        asyncProcess(food),
        asyncProcess(season)
    ]).then(
        response => {
            console.log(response);
            resAll.textContent = response;
        }
    ).catch(
        error => {
            resAll.textContent = `エラー：${error}`;
        }
    );
});

// 非同期処理のある１つが完了したところでコールバックする - raceメソッド -
document.getElementById('btn4').addEventListener('click', function() {
    let music = document.getElementById('music').value;
    let city = document.getElementById('city').value;
    let movie = document.getElementById('movie').value;
    let resRace = document.getElementById('responseRace');

    Promise.race([
        asyncProcess(music),
        asyncProcess(city),
        asyncProcess(movie)
    ]).then(
        response => {
            console.log(response);
            resRace.textContent = response;
        }
    ).catch(
        error => {
            resAll.textContent = `エラー：${error}`;
        }
    );
});
