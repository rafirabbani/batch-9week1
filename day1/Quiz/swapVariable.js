function swapVar(a,b){
    console.log('Before swap => a = ' + a + ', ' + 'b = ' + b)
    let x = a
    let y = b
    x = x + y
    y = x - y
    x = x - y
    console.log('After swap => a = ' + x + ', ' + 'b = ' + y) 
}

swapVar(9,5)