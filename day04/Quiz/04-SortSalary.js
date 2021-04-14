const employees = require("./Employee")

function sortSalary(data){
    data.sort((a,b) => {
        return parseInt(b.salary) - parseInt(a.salary)
    })
    data.map((data)=>{
        console.log(data.first_name + " " + data.last_name)
    })
}
sortSalary(employees)