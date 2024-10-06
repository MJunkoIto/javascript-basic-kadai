
  // この数字の意味は不明。３の倍数であり、５の倍数である
  let num = 15

//ifを用いてnumberが3と5の倍数のとき「3と5の倍数です」
if ((number % 3) === 0 && (number % 5) === 0) {
    console.log('3と5の倍数です')
}

//if文を用いてnumberが3の倍数のとき「3の倍数です」
else if ((number % 3) === 0) {
    console.log('3の倍数です')
}

// if文(else)を用いてnumberが5の倍数のとき「5の倍数です」
else if ((number % 5) ===0) {
    console.log('5の倍数です')
}
