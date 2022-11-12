import { Artist } from '@prisma/client';
import { prisma } from '../../../../infra/prisma/client'

class ListAlbumService{
    // eslint-disable-next-line class-methods-use-this
    async execute(): Promise<Artist[]>{
        const listAlbum = await prisma.album.findMany();
        return listAlbum;
    }
}

export default ListAlbumService;