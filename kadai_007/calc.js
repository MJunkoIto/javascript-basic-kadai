
  // 数字は１以上
  let num = 15

//ifを用いてnumberが3と5の倍数のとき「3と5の倍数です」
if ( num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です')
}

//if文(else)を用いてnumberが3の倍数のとき「3の倍数です」
else if (num % 3 === 0) {
    console.log('3の倍数です')
}

// if文(else)を用いてnumberが5の倍数のとき「5の倍数です」
else if (num % 5 ===0) {
    console.log('5の倍数です')
}
