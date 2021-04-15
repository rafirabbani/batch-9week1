const products = 
    {
        id: 1,
        names: "Laptop Dell",
        price: 1500.00,
        variant: {
            type: "Gamer",
            core: "i7 Core"
        },
    };

const {id, names, price,variant : {type,core}} = products;
console.log(names);
console.log(type);

console.log(`${core} && ${type}`);