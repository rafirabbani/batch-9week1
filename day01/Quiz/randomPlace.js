function randomPlace(num){
    let numString = num.toString();
    let arrayContainer = [];
    for (let i = 100; i < 1000; i++){
        let x = i.toString();
        let check = x.includes(numString)
        if (check) {
            arrayContainer.push(x);
        }
    }
    return arrayContainer;
}

console.log(randomPlace(7))