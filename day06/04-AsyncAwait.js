function getEmployee(id) {
    return {
        id: undefined,
        fullName: '',
        salary: 0,
        skill: []
    }
}

function getUser(id) {
        switch (id) {
            case 1:
                result = { id: 1, fullName: 'dian', salary: 3500 };
                break;
            case 2:
                result = { id: 2, fullName: 'code', salary: 4500 };
                break;
            default:
                result = new Error('get user not found')
        }
        return result;

    
}

function getSkill(user) {
        
        switch (user.id) {
            case 1:
                result = {...user,skill : ['java', 'nodejs', 'fullstack']};
                break;
            case 2:
                result = {...user, skill : ['oracle', 'python', 'docker']};
                break;
            default:
                result = new Error('get user on skill not found')
        }
        return result;
    
}

async function getEmployee(id){
    const user = await getUser(id);
    const result = await getSkill(user)
    return result;
}

getEmployee(0).then(console.log)