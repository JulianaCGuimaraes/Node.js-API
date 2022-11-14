import CreateUserService from "./CreateUser.service";

let createUser: CreateUserService;

describe('Create user', () => {
    beforeAll(async () => {
        createUser = new CreateUserService();
    });

    it('should be able to create a new user', async () => {
        const user = await createUser.execute({
            name: 'Juliana'
        });
    

    expect(user).toHaveProperty('name');
    });
});