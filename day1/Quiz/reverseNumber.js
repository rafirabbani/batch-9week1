function reverseNumber(num){
    let num1 = Math.floor(num / 1000)
    let num2 = Math.floor(num % 1000 / 100)
    let num3 = Math.floor(num % 100 / 10)
    let num4 = Math.floor(num % 10)
    result = num4 * 1000 + num3 * 100 + num2 * 10 + num1
    return result
}

console.log(reverseNumber(1234));