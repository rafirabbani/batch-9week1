function getEmployee(id) {
    return {
        id: undefined,
        name: '',
        salary: 0,
        skill: []
    }
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        switch (id) {
            case 1:
                resolve({ id: 1, name: 'dian', salary: 3500 });
                break;
            case 2:
                resolve({ id: 2, name: 'code', salary: 4500 });
                break;
            default:
                reject(new Error('get user not found'))
        }

    })
}

function getSkill(user) {
    return new Promise((resolve, reject) => {
        switch (user.id) {
            case 1:
                resolve({...user,skill : ['java', 'nodejs', 'fullstack']});
                break;
            case 2:
                resolve({...user, skill : ['oracle', 'python', 'docker']});
                break;
            default:
                reject(new Error('get user on skill not found'))
        }
    })
}

function getEmployee(id){
    //return getUser(id).then(getSkill);

     return getUser(id).then(getSkill).catch((error)=>{
        console.log("oh no"+error);
    }).finally(()=>{
        console.log('finnaly');
    }) 
}

getEmployee(0).then(console.log)