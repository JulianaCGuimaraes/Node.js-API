import { Album } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IDeleteAlbumDTO } from "../../dtos/IDeleteAlbumDTO";

class DeleteAlbumService {
    // eslint-disable-next-line class-methods-use-this
    async execute({ id }: IDeleteAlbumDTO): Promise<Album> {
        const album = await prisma.album.delete({
            where: { 
               id: Number(id)
            }
        });

        return album;
    }
}

export default DeleteAlbumService;