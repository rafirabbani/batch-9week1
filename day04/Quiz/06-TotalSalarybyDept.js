const employees = require("./Employee")

function totalSalarybyDept(data, deptID){
    let totalSalary = 0
    data.map((data) => {
        if (data.department_id === deptID){
            totalSalary += parseInt(data.salary)
        }
    })
    console.log("Total salary departmen " + deptID + ": " + totalSalary )
}

totalSalarybyDept(employees,10)