function sumMinMax(arr){
    let sumAll = arr.reduce((a,b) => {
        return a + b
    }, 0)
    let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)
    let sumMin = sumAll - maxValue
    let sumMax = sumAll - minValue
    return "" + sumMin + " " + sumMax
}

console.log(sumMinMax([1,2,3,4,5]))