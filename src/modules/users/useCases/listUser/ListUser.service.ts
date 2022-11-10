import { User } from "@prisma/client";
import { prisma } from '../../../../infra/prisma/client'

class ListUserService{
    // eslint-disable-next-line class-methods-use-this
    async execute(): Promise<User[]>{
        const listUser = await prisma.user.findMany();
        return listUser;
    }
}

export default ListUserService;