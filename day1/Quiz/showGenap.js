function showGenap(stringOfNum){
    let arrOfNum = stringOfNum.split("")
    let genap = ""
    for (let i = 0; i < arrOfNum.length; i++) {
        let intCheck = parseInt(arrOfNum[i])
        if (intCheck % 2 === 0) {
            genap = genap + intCheck + ','
        }
    }
    genap = genap.slice(0, genap.length-1)
    return genap
}

console.log(showGenap('234567'))