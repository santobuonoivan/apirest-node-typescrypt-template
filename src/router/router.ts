
import { Router, Request, Response } from 'express';

const router = Router();

router.get( '/users', ( req: Request,res: Response) => {
    res.json({
        ok: true,
        mensaje: 'todo está bien!'
    });
});

export default  router;
