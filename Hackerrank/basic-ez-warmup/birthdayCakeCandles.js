function birthdayCakeCandles(candles){
    let tallestCandle = candles[0]
    let tallestCount = 0
    for (let i = 1; i < candles.length; i++){
        if (tallestCandle < candles[i]){
            tallestCandle = candles[i]
        }
        else if (tallestCandle === candles[i]){
            tallestCount++
        }
    }
    return tallestCount
}

console.log(birthdayCakeCandles([1,2,1,2,3,3]))