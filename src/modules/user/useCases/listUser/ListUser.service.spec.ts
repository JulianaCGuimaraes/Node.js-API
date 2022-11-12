import ListUserService from "./ListUser.service";

let listUser: ListUserService;

describe('List users', () => {
    beforeAll(async () => {
        listUser = new ListUserService();
    });

    it('should be able to list all users', async() => {
        const methodExecute = jest.spyOn(listUser, 'execute');

        await listUser.execute();

        expect(methodExecute).toHaveBeenCalled();
    })
})