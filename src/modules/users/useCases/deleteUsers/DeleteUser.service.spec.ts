import DeleteUserService from "./DeleteUser.service";

let deleteUser: DeleteUserService;

describe('Create user', () => {
    beforeAll(async () => {
        deleteUser = new DeleteUserService();
    });

    it('should be able to create a new user', async () => {
        const user = await deleteUser.execute({
            id: 1
        });
    
    expect(user).toHaveProperty('id');
    });
});