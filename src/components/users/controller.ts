
import { Request, Response } from 'express';
import MySQL from '../../mysql/mysql';

exports.getAllUser = async function(req: Request, res: Response){

    const query = 'SELECT * FROM users';

    MySQL.executeQuery(query, (err:any, users: Object[]) => {
        if (err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            users
        })
    });

};


exports.getUser = async function(req: Request, res: Response){
    const id = req.params.id;
    const query = `SELECT * FROM users WHERE user_id = ${id}`;

    MySQL.executeQuery(query, (err:any, user: Object[]) => {
        if (err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            user
        })
    });
};
