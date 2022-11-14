import CreateAlbumService from "./CreateAlbum.service";

let createAlbum: CreateAlbumService;

describe('Create album', () => {
    beforeAll(async () => {
        createAlbum = new CreateAlbumService();
    });

    it('should be able to create a new album', async () => {
        const album = await createAlbum.execute({
            id: 1,
            name: 'Wings'
        });
    
    expect(album).toHaveProperty('id');
    expect(album).toHaveProperty('name');
    });
});