function sumNumber(num){
    let num1 = Math.floor(num / 1000)
    let num2 = Math.floor(num % 1000 / 100)
    let num3 = Math.floor(num % 100 / 10)
    let num4 = Math.floor(num % 10)
    result = num4 + num3 + num2 + num1
    return result
}
console.log(sumNumber(1234))