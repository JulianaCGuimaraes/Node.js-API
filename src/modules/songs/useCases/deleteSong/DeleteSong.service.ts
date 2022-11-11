import { Song } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IDeleteSongDTO } from "../../dtos/IDeleteSongDTO";

class DeleteSongService {
    // eslint-disable-next-line class-methods-use-this
    async execute({ id }: IDeleteSongDTO): Promise<Song> {
        const song = await prisma.song.delete({
            where: { 
               id: Number(id)
            }
        });

        return song;
    }
}

export default DeleteSongService;