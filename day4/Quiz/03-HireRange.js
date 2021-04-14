const employees = require("./Employee")

function hireRange(data, dateStart, dateEnd){
    data.filter((data) => {
        if(Date.parse(data.hire_date) >= Date.parse(dateStart) && Date.parse(data.hire_date) <= Date.parse(dateEnd)){
            console.log("" + data.first_name + " " + data.last_name + '\n')
        }
    })
}

hireRange(employees,'12-01-1993','12-12-1995')