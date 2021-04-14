const employees = require("./Employee")

function employeeByDept(data,deptID){
    let employeeCount = 0
    const filteredData = data.filter((data) => {
        if (data.department_id === deptID) {
            return data
        }
    })
    console.log('List of Employees on Department ' + deptID + '\n')
    filteredData.map((data) => {
        console.log(data.first_name + " " + data.last_name)
        employeeCount += 1
    })
    console.log("\n" + 'Total: ' + employeeCount)
}

employeeByDept(employees, 6)