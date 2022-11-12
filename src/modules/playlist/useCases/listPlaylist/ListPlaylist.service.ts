import { Playlist } from '@prisma/client';
import { prisma } from '../../../../infra/prisma/client'

class ListPlaylistService{
    // eslint-disable-next-line class-methods-use-this
    async execute(): Promise<Playlist[]>{
        const listPlaylist = await prisma.playlist.findMany();
        return listPlaylist;
    }
}

export default ListPlaylistService;