const listProduct = [
    {
        id: 1,
        names: "Laptop Dell",
        price: 1500.00,
        variant: [{
            type: "Gamer",
            core: "i7 Core"
        }],
    },
    {
        id: 2,
        names: "Laptop Asus",
        price: 500.00,
        variant: [{
            type: "Office",
            core: "i7 Core"
        }],
    }
];

const filterProductById= (products,id) =>{
    return products.filter(x => x.id === id);
}

const filterProductByVariant= (products,key) =>{
    return products.map(data =>{
        data.variant.filter(x => x.type === key)
    })
}

const variant = filterProductByVariant(listProduct,"Office")

const result = filterProductById(listProduct,2);

console.log(result);