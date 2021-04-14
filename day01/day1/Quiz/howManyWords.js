function howManyWords(sentence){
    let count = 0;
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === " "){
            count += 1
        }
    };
    count += 1;
    return count;
}

//console.log(howManyWords('hello bootcamp code id'));