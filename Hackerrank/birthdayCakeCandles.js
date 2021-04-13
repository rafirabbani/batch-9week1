function birthdayCakeCandles(candles){
    let tallestCandle = candles[0]
    let tallestCount = 0
    for (let i = 1; i < candles.length; i++){
        if (tallestCandle < candles[i]){
            tallestCandle = candles[i]
        }
    }
    for (let j = 0; j < candles.length; j++){
        if (tallestCandle === candles[j]){
            tallestCount++
        }
    }
    return tallestCount
}