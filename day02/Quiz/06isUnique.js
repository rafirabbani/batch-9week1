function isUnique(s){
    let arr = s.split("")
    arr.sort()
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            return false
        }
    }
    return true
}

console.log(isUnique('abcdefg'))