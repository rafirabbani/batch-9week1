const employees = require("./Employee")

function searchEmployee(data, prefix){
    data.filter((data) => {
        if (data.first_name[0] === prefix){
            console.log("" + data.first_name + " " + data.last_name + "\n")
        }
    })
}

searchEmployee(employees, 'A')