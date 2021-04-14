const employees = require("./Employee")

function salaryRange(data,min,max){
    data.filter((data) => {
        if (data.salary <= max && data.salary >= min){
            console.log("" + data.first_name + " " + data.last_name + '\n')
        }
    })
}

salaryRange(employees,2400,4800)