import {Request, Response} from 'express';
import UpdateUserService from './UpdateUser.service';

class UpdateUserController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id, name } = req.body;

        const updateUser = new UpdateUserService();

        const result = await updateUser.execute({
            id,
            name
        });

        return res.status(201).json(result);
    }
}

export default UpdateUserController;