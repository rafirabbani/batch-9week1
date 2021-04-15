const emps = ["code","Programmer",4500,"12-DEC-2015"]

function printEmp(name,job,salary,hire){
    console.log(`${name} is working as ${job} with salary ${salary} hire : ${hire}
    `);
}

//printEmp(emps[0],emps[1],emps[2],emps[3]);

printEmp(...emps);