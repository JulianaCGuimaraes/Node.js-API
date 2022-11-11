import { Artist } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IDeleteArtistDTO } from "../../dtos/IDeleteArtistDTO";

class DeleteArtistService {
    // eslint-disable-next-line class-methods-use-this
    async execute({ id }: IDeleteArtistDTO): Promise<Artist> {
        const artist = await prisma.artist.delete({
            where: { 
               id: Number(id)
            }
        });

        return artist;
    }
}

export default DeleteArtistService;