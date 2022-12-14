import UpdateUserService from "./UpdateUser.service";

let updateUser: UpdateUserService;

describe('Update user', () => {
    beforeAll(async () => {
        updateUser = new UpdateUserService();
    });

    it('should be able to update a users', async () => {
        const user = await updateUser.execute({
            id: 4,
            name: 'João'
        });
    
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    });
});