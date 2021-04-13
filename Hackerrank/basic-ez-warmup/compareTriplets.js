function compareTriplets(a,b){
    const point = [0,0]
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            point[0]++
        }
        else if (a[i] < b[i]){
            point[1]++
        }
    }
    return point
}

console.log(compareTriplets([1,5,7],[2,5,8]))