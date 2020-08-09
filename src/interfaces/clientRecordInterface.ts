import { Document } from 'mongoose';

export interface IClientRecord extends Document {
    clinic: string,
    doctorName: string,
    patientName: string,
    diagnosis: string,
    medication?: string[],
    consultationFee: number,
    dateTime: Date,
    needFollowUp: boolean
}

export interface IGetClinicRecordParams {
    clinicName?: string,
    mode?: string,
    dateTime?: string
}