//　back-btnというidを持つHTML要素そ取得し、定数に代入する
const backBtn = document.getElementById('back-btn');

//　画面がスクロールされたときにイベント処理を実行する
window.addEventListener('scroll', () => {
　　//　画面のスクロール量をpx(ピクセル)数で取得する
   const scrollValue = document.scrollingElement.scrollTop;

//　画面のスクロール量が300以上であれば、「TOP」ボタンを表示する
if (scrollValue >= 300) {
    backBtn.style.display ='inline';
}
//　画面のスクロール用がそれ以外(300px未満)であれば、「TOP」にもどるボタンを非表示にする　
else {
    backBtn.style.display = 'none';
}
});