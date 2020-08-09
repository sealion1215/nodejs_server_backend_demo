import 'module-alias/register';

import { accountRouter } from '@controllers/accountController';
import { clientRecordRouter } from '@controllers/clientRecordController';
import { connectToDB } from '@dbOperations/mongo';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { configInUse } from 'config';

const { port, dbUri, dbUsername, dbPassword } = configInUse;
const start = () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    accountRouter(app);
    clientRecordRouter(app);

    app.listen(port, async err => {
        if (err) {
            console.error(err);
        } else {
            await connectToDB(dbUri, dbUsername, dbPassword);
            console.log(`listening on port ${port}...`);
        }
    });
}

start();