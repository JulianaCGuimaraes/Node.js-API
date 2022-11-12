import {Request, Response} from 'express';
import CreateUserService from './CreateUser.service';

class CreateUserController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createUser = new CreateUserService();

        const result = await createUser.execute({
            name
        });

        return res.status(201).json(result);
    }
}

export default CreateUserController;