import DeleteAlbumService from "./DeleteAlbum.service";

let deleteAlbum: DeleteAlbumService;

describe('Delete album', () => {
    beforeAll(async () => {
        deleteAlbum = new DeleteAlbumService();
    });

    it('should be able to delete album', async () => {
        const album = await deleteAlbum.execute({
            id: 2
        });
    
    expect(album).toHaveProperty('id');
    });
});