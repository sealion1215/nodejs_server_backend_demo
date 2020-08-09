import mongoose, { Schema } from 'mongoose';
import { IClientRecord, IGetClinicRecordParams } from '@interfaces/clientRecordInterface';

const clinicRecordSchema = new Schema({
    clinicName: String,
    doctorName: String,
    patientName: String,
    diagnosis: String,
    medication: [String],
    consultationFee: Number,
    dateTime: Date,
    needFollowUp: Boolean
}, { collection: 'clinicRecord' });

const ClinicRecords = mongoose.model<IClientRecord>('clinicRecord', clinicRecordSchema);

const getClinicRecordsByClinic = async (clinicParams: IGetClinicRecordParams) => {
    const { clinicName, mode, dateTime } = clinicParams;
    console.log('getting clinic records', clinicName);
    const clinicRecords = await ClinicRecords.find({
        clinicName: clinicName
    }).exec();
    return clinicRecords;
}

export {
    getClinicRecordsByClinic
}