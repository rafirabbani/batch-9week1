function superReducedString(s){
<<<<<<< HEAD
    for (let i = 1; i < s.length; i++){ 
=======
    for (let i = 0; i < s.length; i++){ 
>>>>>>> hackerrank
        if (s[i] === s[i-1]){
            s = s.substring(0, i-1) + s.substring(i+1)
            i = 0
        }
    }
    if (s.length === 0){
        return "Empty String"
    } else {
        return s
    }
}
console.log(superReducedString('bccddab'))
