import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json( {nome: 'Danilo Pinho'})
});

export { router };