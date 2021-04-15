// Spread operator Object.Assign
const employee ={
    empId : 1,
    firstName : "codeid",
}

let emps = {...employee,firstName : "sentul"}
console.log(emps);

emps ={...emps,lastName : "city"}
console.log(emps);

emps ={...emps,salary : 4500,address : "bogor"}
console.log(emps);