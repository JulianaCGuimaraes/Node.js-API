import { Album } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { ICreateAlbumDTO } from "../../dtos/ICreateAlbumDTO";

class CreateAlbumService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({name}: ICreateAlbumDTO): Promise<Album> {
        const album= await prisma.album.create({ 
            data: {
                name
            }
        });

        return album;
    }
}

export default CreateAlbumService;