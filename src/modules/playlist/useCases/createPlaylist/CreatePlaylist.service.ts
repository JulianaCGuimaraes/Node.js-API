import { Playlist } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { ICreatePlaylistDTO } from "../../dtos/ICreatePlaylistDTO";

class CreatePlaylistService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({name, user, song}: ICreatePlaylistDTO): Promise<Playlist> {
        const playlist = await prisma.playlist.create({ 
            data: {
                name,
                user: {
                    connect: {
                        id: Number(user.id)
                    }
                },
                song: {
                    connect: {
                        id: Number(song.id)
                    }
                }
            }
        });

        return playlist;
    }
}

export default CreatePlaylistService;