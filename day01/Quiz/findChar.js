function findChar(sentence, char){
    count = 0
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === char){
            count += 1;
        }
    }
    if (count >= 1){
        return true;
    } else {
        return false;
    }
}

console.log(findChar('aku suka', 'a'))