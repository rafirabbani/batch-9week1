function superReducedString(s){
    for (let i = 1; i < s.length; i++){ 
<<<<<<< HEAD
        if (s[i] === s[i-1]){
=======
        if (s.charAt(i) === s.charAt(i-1)){
>>>>>>> day04
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
<<<<<<< HEAD
console.log(superReducedString('bccddab'))
=======
console.log(superReducedString('baab'))
>>>>>>> day04
