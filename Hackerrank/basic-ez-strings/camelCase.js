function camelCase(s){
    let count = 0
    for (let i = 0; i < s.length; i++){
        let char = s[i]
        if (char === char.toUpperCase()){
            count++
        }
    }
    return count + 1
}

camelCase('saveChangesToEdit')