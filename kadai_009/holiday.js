//　変数の宣言
let holidays;

// 値の代入
holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"];

//変数numにランダムな整数を代入する
let num = Math.floor(Math.random() * holidays.length);

//変数numの最初の値を出力する(確認用)
console.log('最初の値は' + holidays.length + 'です');

//変数numの値が配列の範囲内である間、変数numの値を出力しつづける
while (num !== 0 ) {
    num = Math.floor(Math.random() * holidays.length);

//次の条件式で比較される、変数numの現在の値を出力する
console.log('現在の値は' + num + 'です');
}

//holidaysの要素を順番に出力する
for (let i = 0; i <= holidays.length; i++ ) {
    console.log( holidays.length );
}

