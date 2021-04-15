const employee ={
    empId : 1,
    firstName : "dian",
    lastName : "permana",
    job : "programmer"
}

// rest parameter
const {empId,...info} = employee;
console.log(info);

// spread operator 
const emps = {...employee,salary : 5000}
console.log(emps);