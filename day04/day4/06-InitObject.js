const employee ={
    nama : "code",
    salary : 500,
    address : [
        {
            jalan : "a",
            kodepos : 1234
        },
        {
            jalan : "b",
            kodepos : 12345
        }
    ]
}

console.log(employee);

console.log(employee.nama);

console.log(employee.address);

const infoEmp = info =>{
    return `${info.nama} - ${info.salary}`
}

console.log(infoEmp(employee));
