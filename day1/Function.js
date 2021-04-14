//regular function 
function say(){
    return "Hello Gaez"
}

console.log(say());

function sayHi(param){
    return "Hello Gaez "+param
}

console.log(sayHi("Bootcamp"));

// arrow function
const arrow = (param) => {
    return "arrow "+param
}

console.log("value : "+arrow(true)); 

// genap ganjil 
const gage = (param) =>{
    if(param % 2 === 0 ){
        return "genap"
    }else{
        return "ganjil"
    }
}

console.log(gage(5));



//fuction expression

/* const fnc_exp= function (value){
    return value;
}
console.log(fnc_exp);
// function expression with name
const fnc_expx= function foo(value){
    return value;
}
*/
