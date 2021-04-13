function birthdayCakeCandles(candles){
    let tallestCandle = candles[0]
    let tallestCount = 1
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

console.log(birthdayCakeCandles([3,1,2,1,2,3]))