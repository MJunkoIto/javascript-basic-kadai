 // textというidを持つ要素を定数textElementに代入
 const textElement = document.getElementById('text');
 // btnというid名を持つ要素を定数btnElementに代入
 const btnElement = document.getElementById('btn');

 //textというidを持つ要素を取得し、中身を出力する
 console.log(textElement);

 //btnというid名を持つhtml要素を取得し、中身を出力する
 console.log(btnElement);

 //ボタンがクリックされた時に実行されるイベントリスナーを追加
 btnElement.addEventListener('click',() => {
     // 2秒後に見出しのテキストを変更
     setTimeout(() => {
         textElement.textContent = 'ボタンをクリックしました';
     }, 2000);
 });