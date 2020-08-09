import mongoose, { Schema } from 'mongoose';
import { IAccount, ILoginInfo } from '@interfaces/accountInterface';

const accountSchema = new Schema({
    email: String,
    password: String,
    clinicName: String,
    phoneNumber: String,
    address: String
}, { collection: 'account' });

const Accounts = mongoose.model<IAccount>('account', accountSchema);

const insertUser = async (accountInfo: IAccount) => {
    const newAccount = new Accounts(accountInfo);
    return await newAccount.save((err, newAccount) => {
        if (err) {
            throw(err);
        } else {
            return newAccount;
        }
    });
}

const getUsers = async (loginInfo: ILoginInfo) => {
    const { email, password } = loginInfo;
    console.log('getting users', email);
    const user = await Accounts.findOne({
        email,
        password
    }).exec();
    return user;
}

export {
    insertUser,
    getUsers
}