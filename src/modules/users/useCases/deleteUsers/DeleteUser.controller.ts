import { Request, Response } from 'express';
import DeleteUserService from './DeleteUser.service';

class DeleteUserController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deleteUser = new DeleteUserService();

        const result = await deleteUser.execute({ id });

        return res.status(201).json(result);
    }
}

export default DeleteUserController;