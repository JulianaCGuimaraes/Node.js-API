import { Request, Response } from 'express';
import ListUserService from './ListUser.service';

class ListUserController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const listUser = new ListUserService();

        const result = await listUser.execute();

        return res.status(200).json(result);
    }
}

export default ListUserController;