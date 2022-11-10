import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { prisma } from "../../../../infra/prisma/client";

class CreateUserService {
    // eslint-disable-next-line class-methods-use-this
    async execute ({name}: ICreateUserDTO): Promise<User> {
        const user = await prisma.user.create({ 
            data: {
                name
            }
        });

        return user;
    }
}

export default CreateUserService;