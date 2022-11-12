import ListAlbumService from "./ListAlbum.service";

let listAlbum: ListAlbumService;

describe('List albums', () => {
    beforeAll(async () => {
        listAlbum = new ListAlbumService();
    });

    it('should be able to list all albums', async() => {
        const methodExecute = jest.spyOn(listAlbum, 'execute');

        await listAlbum.execute();

        expect(methodExecute).toHaveBeenCalled();
    })
})