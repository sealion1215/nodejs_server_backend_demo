import { getClinicRecordsByClinic } from '@dbOperations/mongo/operations/clinicRecord';
import { IGetClinicRecordParams } from '@interfaces/clientRecordInterface';

const getClientRecordsByClinic = async (clinicParams: IGetClinicRecordParams) => {
    return await getClinicRecordsByClinic(clinicParams);
}

export {
    getClientRecordsByClinic
}