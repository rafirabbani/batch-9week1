function deretSatu(num){
    let arrayOfSatu = [];
    for (let i = 0; i < num; i++){
        let stringOfSatu = "";
        for (let j = 0; j <= i; j++){
            stringOfSatu += '1';

        }
        arrayOfSatu.push(stringOfSatu);
    }
    return arrayOfSatu;
}

console.log(deretSatu(5));