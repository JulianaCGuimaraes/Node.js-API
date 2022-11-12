import {Request, Response} from 'express';
import CreateAlbumService from './CreateAlbum.service';

class CreateAlbumController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createAlbum = new CreateAlbumService();

        const result = await createAlbum.execute({
            name
        });

        return res.status(201).json(result);
    }
}

export default CreateAlbumController;