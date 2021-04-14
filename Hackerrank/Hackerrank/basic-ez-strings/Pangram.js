function pangram(s){
    let count = 0;
    s = s.toLowerCase()
    const arrOfChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const obj = {}
    for (let i = 0; i < s.length; i++){
        for (let j = 0; j < arrOfChar.length; j++){
            if (s[i] === arrOfChar[j]){
                obj[arrOfChar[j]] = 1
            }
        }
    }
    for (let x in obj){
        count += obj[x]
    }
    console.log(count)
}

pangram('We promptly judged antique ivory buckles for the next prize')
    
