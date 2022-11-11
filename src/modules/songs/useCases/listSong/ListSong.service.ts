import { Song } from '@prisma/client';
import { prisma } from '../../../../infra/prisma/client'

class ListSongService{
    // eslint-disable-next-line class-methods-use-this
    async execute(): Promise<Song[]>{
        const listSong = await prisma.song.findMany();
        return listSong;
    }
}

export default ListSongService;