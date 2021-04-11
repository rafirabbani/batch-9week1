function maxWordLength(s){
    let arrOfWord = s.split(" ")
    let longestString = ""
    for (let i = 0; i < arrOfWord.length; i++){
        if (longestString.length < arrOfWord[i].length){
            longestString = arrOfWord[i]
        }
    }
    return longestString
}
console.log(maxWordLength('aku suka bootcamp code id di sentul'))