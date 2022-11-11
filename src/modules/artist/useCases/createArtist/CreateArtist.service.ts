import { Artist } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { ICreateArtistDTO } from "../../dtos/ICreateArtistDTO";

class CreateArtistService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({name}: ICreateArtistDTO): Promise<Artist> {
        const artist = await prisma.artist.create({ 
            data: {
                name
            }
        });

        return artist;
    }
}

export default CreateArtistService;