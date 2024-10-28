//　id "btn"を持つ要素(ボタン)を取得
const btn = document.getElementById('btn');
//　id"text"をもつ要素(テキスト)を取得
const text = document.getElementById('text');


//　ボタンがクリックされた時に実行されるイベントリスナー
btn.addEventListener('click', () =>{
    //　テキストの文章を変更
    text.textContent = 'ボタンをクリックしました';
});