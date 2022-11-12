import UpdateAlbumService from "./UpdateAlbum.service";

let updateAlbum: UpdateAlbumService;

describe('Update album', () => {
    beforeAll(async () => {
        updateAlbum = new UpdateAlbumService();
    });

    it('should be able to update a album', async () => {
        const album = await updateAlbum.execute({
            id: 1,
            name: 'JoãoAlbum'
        });
    
    expect(album).toHaveProperty('id');
    expect(album).toHaveProperty('name');
    });
});