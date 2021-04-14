const employees = require("./Employee")

function totalSalary(data){
    let totalSalary = 0
    data.map((data) => {
        return totalSalary += parseInt(data.salary)
    })
    console.log(totalSalary) 
}

totalSalary(employees)

