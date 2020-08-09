import { Document } from 'mongoose';

export interface ILoginInfo {
    email: string,
    password: string
}

export interface IAccount extends ILoginInfo, Document {
    clinicName: string,
    phoneNumber: string,
    address: string
}