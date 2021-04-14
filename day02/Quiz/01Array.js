const fruits = ['Jeruk', 'Mangga', 'Jambu', 'Durian', 'Rambutan']
const sayur = ['Kangkung', 'Bayam', 'Tomat', 'Bawang', 'Bayam']

//Push
let insert = ['Anggur', 'Banana', 'Sirsak']
for (let i = 0; i < insert.length; i++){
    fruits.push(insert[i])
}

console.log(fruits);

//Pop
fruits.pop()
console.log(fruits)

//Splice
fruits.splice(2,1)
console.log(fruits)
fruits.splice(2,3)
console.log(fruits)
fruits.splice(2,0,'Rambutan','Bangkuang')
console.log(fruits)
fruits.splice(-1,1,'Nangka')
console.log(fruits)

//Concat
newArr = fruits.concat(sayur)
console.log(newArr)

//Reverse array with loop
let reverseNewArr = []
for(let i = newArr.length - 1; i >= 0; i--){
    reverseNewArr.push(newArr[i])
}
console.log(reverseNewArr)

//Index switching
function indexSwitch(arr,v1, v2){
    v1 = v1.toUpperCase()
    v2 = v2.toUpperCase()
    for (let i = 0; i < arr.length; i++){
        help = arr[i].toUpperCase()
        if (v1 === help ){
            arr.splice(i, 1, v2)
        } 
        else if (v2 === help){
            arr.splice(i, 1, v1)
        }
    }
    return arr
}

console.log(indexSwitch(newArr,'Jeruk', 'Tomat'))


