import { IAccount, ILoginInfo } from '@interfaces/accountInterface';
import { insertUser, getUsers } from '@dbOperations/mongo/operations/account';

const registerAccount = async (account: IAccount) => {
    return await insertUser(account);
}

const login = async (account: ILoginInfo) => {
    const user = await getUsers(account);
    if (user != null) {
        console.log('login success: ', user);
        return user;
    } else {
        console.log('login fail: ', account);
        return false;
    }
    
}

export {
    registerAccount,
    login
}