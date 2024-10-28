//　id "btn"を持つ要素(ボタン)を取得
const btn = document.getElementById('btn');

//　ボタンがクリックされた時に実行されるイベントリスナー
btn.addEventListener('click', () =>{
    //　ボタンのテキストを変更
    btn.textContent = 'ボタンをクリックしました';
});