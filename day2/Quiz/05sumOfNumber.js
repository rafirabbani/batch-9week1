function sumOfNum(arr, sum){
    const outArr = []
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                outArr.splice(0,0,arr[i],arr[j])
            }
        }
    }
    return outArr
}

console.log(sumOfNum([1,2,3,4,5], 5))