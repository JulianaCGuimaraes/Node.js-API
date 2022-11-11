
import { Song } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { ICreateSongDTO } from "../../dtos/ICreateSongDTO";

class CreateSongService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({name, album, artist,}: ICreateSongDTO): Promise<Song> {
        const song = await prisma.song.create({ 
            data: {
                name,
                album:{
                    connect: {
                        id: Number(album.id)
                    }
                },
                artist: {
                    connect: {
                        id: Number(artist.id)
                    }
                }
            }
        });

        return song;
    }
}

export default CreateSongService;