//　head要素を取得し、中身を出力する
console.log(document.head);
//　body要素を取得し、中身を出力する
console.log(document.body);

//　windowオブジェクトの中身を出力する
console.log(window);

//　HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

//　HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

//　複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');

//　複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}

//　ここから想像が追い付かなくなり、書き進めるだけ。
//　HTML要素をCSSセクレタで取得し、中身を出力する(最初の1つ)
console.log(document.querySelector('h1'));
console.log(document.querySelector('#secont-heading'));
console.log(document.querySelector('.list'));

//　HTML要素をCSSセクれたで取得し、中身を出力する()すべて
console.log(document.querySelectorAll('heading'));
console.log(document.querySelectorAll('li'));

//　複数のHTML要素を取得し、定数に代入する
const cssHeadings = document.querySelectorAll;('.heading');
const cssLists = document.querySelectorAll('li');

//　複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < cssHeadings.length; i++) {
    console.log(cssHeadings[i]);
}
for (let i = 0; i < cssLists.length; i++) {
    console.log(cssLists[i]);
}

//　新しくli要素を作成し、定数に代入する
const  li = document.createElement('li');

//　作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';
li.innerHTML = '<a href="#'>JavaScriptで新しく作成したリスト3</a>';


//　ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);

// 最後textContentプロパティはきじゅつするか














//　要素名で出力する例
//　document.querySelector('h1');
//　id名で取得する例
//　document.querySelector('#secong-heading');
//　class名で取得する例
//　document.querySelector('.list');S