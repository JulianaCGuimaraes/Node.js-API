import { User } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IDeleteUserDTO } from "../../dtos/IDeleteUserDTO";


class DeleteUserService {
    // eslint-disable-next-line class-methods-use-this
    async execute({ id }: IDeleteUserDTO): Promise<User> {
        const user = await prisma.user.delete({
            where: { 
               id: Number(id)
            }
        });

        return user;
    }
}

export default DeleteUserService;