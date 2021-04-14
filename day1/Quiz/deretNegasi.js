function deretNegasi(num){
    let arrayOfNegasi = [];
    let first = -1
    for (let i = 0; i <= num; i++){
        if (i === 0) {
            arrayOfNegasi.push(first)
        } 
        else if (i % 2 !== 0) {
            first *= -1
            arrayOfNegasi.push(first)
            first *= -1
        } else {
            first -= 1
            arrayOfNegasi.push(first)
        }

    }
    return arrayOfNegasi
}

console.log(deretNegasi(25));