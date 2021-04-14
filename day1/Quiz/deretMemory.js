function deretMemory(caps){
    let arrayOfMemory = []
    let firstMemory = 1
    for (let i = 0; i <= caps; i++){
        arrayOfMemory.push(firstMemory)
        firstMemory = firstMemory * 2
    }
    return arrayOfMemory
}

console.log(deretMemory(7))
