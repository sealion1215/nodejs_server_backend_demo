import { Router, Request, Response } from 'express';
import { getClientRecordsByClinic } from '@services/clientRecordService'
import { authenticateToken } from '@services/tokenService';

const clientRecordRouter = (app: Router) => {
    const router = Router();
    app.use('/records', router);

    router.post('/getRecords', authenticateToken, async (req: Request, res: Response) => {
        const result = await getClientRecordsByClinic(req.body);
        return res.send(result).status(200);
    });
};
  
export {
    clientRecordRouter
}