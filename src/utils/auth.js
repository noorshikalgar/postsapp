import _ from 'lodash';

export const register = (data) => {
    if (!data) return false;

    let allRegisteredUsers = {};
    
    let users =  localStorage.getItem('registeredUsers');
    if(users){
       users =  JSON.parse(users);
       allRegisteredUsers = users;
    }

    data['id'] = generateId();
    allRegisteredUsers[data.email] = data;

    
    localStorage.setItem('registeredUsers', JSON.stringify(allRegisteredUsers));
    return true;

}

export const login = (data) => {
    if(!data) return false;

    try {
        const allUsers = JSON.parse(localStorage.getItem('registeredUsers'));

        
        for(let user in allUsers){
            const userData = allUsers[user];     
            if( data.email === userData.email && data.password === userData.password ) {
                console.log("checking");
                localStorage.setItem('loggedUser' , JSON.stringify(userData));
                return true;
            }    
        }
    } catch(ex) {
        console.log(ex.message);
    }
    return false;
}


export const logout = () => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if(!loggedUser) return false;

    localStorage.removeItem('loggedUser');
    return true;
}


export const getLoggedUser = () => {
    return JSON.parse(localStorage.getItem("loggedUser"));
}


const generateId = () => Math.random().toString(36).substring(7);
