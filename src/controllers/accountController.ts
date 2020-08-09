import { Router, Request, Response } from 'express';
import { registerAccount, login } from '@services/accountService';
import { getToken } from '@services/tokenService';

const accountRouter = (app: Router) => {
    const router = Router();
    app.use('/accounts', router);

    router.post('/register', async (req: Request, res: Response) => {   
        const accountInfo = req.body;
        try {
            const result = await registerAccount(accountInfo);
            return res.send(`Post register: ${result}`).status(200);
        } catch(err) {
            return res.send(`Registration failed`).status(500);
        }
        
    });

    router.post('/login', async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const accountInfo = {
            email,
            password
        }
        console.log('login', accountInfo);
        const result = await login(accountInfo);
        
        if (result) {
            const token = getToken(accountInfo.email);
            return res.send({ auth: true, token, result });
        }
        return res.send(`Login failed`).status(401);
    });
};
  
export {
    accountRouter
}