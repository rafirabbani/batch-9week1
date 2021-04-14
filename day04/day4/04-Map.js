// initial map KEY, VALUE
let ceo = new Map();
ceo.set("fb","Mark");
ceo.set("g","Larry");

console.log(ceo.size);
console.log(ceo.get("g"));

for (const [key,value] of ceo) {
    console.log(key+" founded by "+value);
}

ceo.forEach((key,value) =>{
    console.log(key+" founded by "+value);
});