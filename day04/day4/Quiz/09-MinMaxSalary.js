const employees = require("./Employee")

function minMaxSalary(data){
    data.sort((a,b) => {
        return parseInt(b.salary) - parseInt(a.salary)
    })
    console.log("Employee with max salary is " + data[0].first_name + " " + data[0].last_name + " (" + data[0].salary + ')')
    console.log("Employee with min salary is " + data[data.length - 1].first_name + " " + data[data.length-1].last_name + ' (' + data[data.length-1].salary + ')')
}
minMaxSalary(employees)