function plusMinus(arr){
    const count = [0,0,0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            count[0] += 1
        }
        else if (arr[i] < 0){
            count[1] += 1
        }
        else {
            count[2] += 1
        }
    }
    for (let j = 0; j < count.length; j++){
        let ratio = count[j] / arr.length
        ratio = ratio.toFixed(6)
        process.stdout.write(ratio + "\n")
    }
}

plusMinus([1,2,3,0,0,0,-1,-4,-5,-6,-9])