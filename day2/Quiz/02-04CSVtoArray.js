// No. 2
function csvToArr(csv){
    let arr = csv.split(',')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].replace(/[\r\n]+/gm, "")
    }
    return arr
}

arrOfProducts = csvToArr(`LG Monitor,Asus Laptop 5432,Mix For Youtuber,Bluetooth Adapter,Solo 
Leveling Webtoon,Panasonic Air Conditioner,Karaoke Bazooka,PowerBank 24 
Hours,Backpack of Holding Game,Box 5 Universal Gadget Charger,USB 
Squirming Tentacle,USB Fishquarium,Intel Processor 8 core,Space Bar 
Keyboard Organizer & USB Hub Pop,USB Pet Rock Powerstation 5,Dual Heated 
Travel Mug,Crosley Collegiate Portable USB Turntable,Hoodie,AK-47`)

// No. 3
function filterProducts(filter, products){
    let filteredProducts = products.filter((prod)=>{
        return prod[0] === filter
    })
    return filteredProducts
}

//console.log(filterProducts('A', arrOfProducts))
//console.log(filterProducts('S', arrOfProducts))

// No. 4
function printProducts(products){
    for(let i = 10; i < 36; i++){
        let letter = i.toString(36)
        letter = letter.toUpperCase()
        let filteredProducts = filterProducts(letter, products)
        if (filteredProducts.length > 0) {
            console.log('===' + letter + '===')
        for(let j = 0; j < filteredProducts.length; j++){
            if (filteredProducts.length - 1 === j){
                console.log(filteredProducts[j] + '\n')
            } else {
                console.log(filteredProducts[j])
                }
            }
        }
    }
}

printProducts(arrOfProducts)