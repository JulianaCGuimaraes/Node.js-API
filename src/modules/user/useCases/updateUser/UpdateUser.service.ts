import { User } from "@prisma/client";
import { prisma } from "../../../../infra/prisma/client";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";


class UpdateUserService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({id, name}: IUpdateUserDTO): Promise<User> {
        const user = await prisma.user.update({ 
            where: {
                id: Number(id),
            },
            data: {
                name: String(name)
            }
        });

        return user;
    }
}

export default UpdateUserService;