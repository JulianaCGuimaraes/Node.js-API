import { Playlist } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IUpdatePlaylistDTO } from "../../dtos/IUpdatePlaylistDTO";

class UpdatePlaylistService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({ 
        id, 
        name
    }: IUpdatePlaylistDTO): Promise<Playlist> {
        const playlist = await prisma.playlist.update({ 
            where: {
                id: Number(id)
            },
            data: {
                name: String(name),
                user: {
                    update: {
                       id: Number(id)
                    }
                },
                song: {
                    update: {
                       id: Number(id)
                    }
                }
            }
        });

        return playlist;
    }
}

export default UpdatePlaylistService;