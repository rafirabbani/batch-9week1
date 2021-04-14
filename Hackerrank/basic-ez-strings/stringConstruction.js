function stringConstruct(s){
    let stringSet = new Set()
    for (let i = 0; i < s.length; i++){
        stringSet.add(s[i])
    }
    return stringSet.size
}

stringConstruct('abcdeefggghijklmmmmnnnaaaabcdewqeeeedcdasdwqdccccccasasdsawdsa')