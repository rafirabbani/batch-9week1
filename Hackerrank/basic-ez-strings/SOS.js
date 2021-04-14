function sos(s){
    let check = 'SOS'
    let errCount = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] !== check[i % 3]){
            errCount++
        }
    }
    return errCount
}

//console.log(sos('SOSOOSOSOSOSOSSOSOSOSOSOSOS'))
let s = 'hhaacckkeerrrraannkk'
console.log(s.includes('hackerrank'))