import {Request, Response} from 'express';
import CreateArtistService from './CreateArtist.service';

class CreateArtistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createArtist = new CreateArtistService();

        const result = await createArtist.execute({
            name
        });

        return res.status(201).json(result);
    }
}

export default CreateArtistController;