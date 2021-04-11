function countingMountain(trip){
    let count = 0
    let pos = 0
    for(let i = 0; i < trip.length; i++){
        if (trip[i] === 'U') {
            pos++
        }
        else {
            pos--
        }
        if (pos === 0 && trip[i] ==='D') {
            count++
        }
    }
    return count;
}

console.log(countingMountain('UDDDUDUU') + ' gunung')