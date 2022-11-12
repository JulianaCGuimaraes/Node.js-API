import { Playlist } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IDeletePlaylistDTO } from "../../dtos/IDeletePlaylistDTO";

class DeletePlaylistService {
    // eslint-disable-next-line class-methods-use-this
    async execute({ id }: IDeletePlaylistDTO): Promise<Playlist> {
        const playlist = await prisma.playlist.delete({
            where: { 
               id: Number(id)
            }
        });

        return playlist;
    }
}

export default DeletePlaylistService;