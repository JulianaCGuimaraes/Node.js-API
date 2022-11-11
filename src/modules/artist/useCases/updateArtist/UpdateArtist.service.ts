import { Artist } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IUpdateArtistDTO } from "../../dtos/IUpdateArtistDTO";


class UpdateArtistService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({id, name}: IUpdateArtistDTO): Promise<Artist> {
        const artist = await prisma.artist.update({ 
            where: {
                id: Number(id),
            },
            data: {
                name: String(name)
            }
        });

        return artist;
    }
}

export default UpdateArtistService;