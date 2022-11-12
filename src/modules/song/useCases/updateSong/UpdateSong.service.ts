import { Song } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IUpdateSongDTO } from "../../dtos/IUpdateSongDTO";

class UpdateSongService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({ 
        id, 
        name
    }: IUpdateSongDTO): Promise<Song> {
        const song = await prisma.song.update({ 
            where: {
                id: Number(id)
            },
            data: {
                name: String(name),
                album: {
                    update: {
                       id: Number(id)
                    }
                },
                artist: {
                    update: {
                       id: Number(id)
                    }
                }
            }
        });

        return song;
    }
}

export default UpdateSongService;