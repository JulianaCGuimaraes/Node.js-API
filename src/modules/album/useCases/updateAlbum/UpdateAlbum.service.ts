import { Album } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IUpdateAlbumDTO } from "../../dtos/IUpdateAlbumDTO";

class UpdateAlbumService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({id, name}: IUpdateAlbumDTO): Promise<Album> {
        const album = await prisma.album.update({ 
            where: {
                id: Number(id),
            },
            data: {
                name: String(name)
            }
        });

        return album;
    }
}

export default UpdateAlbumService;