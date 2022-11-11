import { Artist } from '@prisma/client';
import { prisma } from '../../../../infra/prisma/client'

class ListArtistService{
    // eslint-disable-next-line class-methods-use-this
    async execute(): Promise<Artist[]>{
        const listArtist = await prisma.artist.findMany();
        return listArtist;
    }
}

export default ListArtistService;