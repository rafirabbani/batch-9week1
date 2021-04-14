function isPalindrome(sentence) {
    sentence = sentence.replace(/\s+/g, '')
    let lowerCase = sentence.toLowerCase();
    let reverseSentence = "";
    for (let i = lowerCase.length - 1; i >= 0; i--){
        reverseSentence += lowerCase[i];
    }
    if(reverseSentence === lowerCase){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('tamaT'));