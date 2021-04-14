const employees = require("./Employee")

function employeeByJobId(data,jobID){
    let employeeCount = 0
    const filteredData = data.filter((data) => {
        if (data.job_id === jobID) {
            return data
        }
    })
    console.log('List of Employees on JobID ' + jobID + '\n')
    filteredData.map((data) => {
        console.log(data.first_name + " " + data.last_name)
        employeeCount += 1
    })
    console.log("\n" + 'Total: ' + employeeCount)
}

employeeByJobId(employees,17)