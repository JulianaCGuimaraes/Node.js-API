import DeletePlaylistService from "./DeletePlaylist.service";

let deletePlaylist: DeletePlaylistService;

describe('Delete playlist', () => {
    beforeAll(async () => {
        deletePlaylist = new DeletePlaylistService();
    });

    it('should be able to delete playlist', async () => {
        const playlist = await deletePlaylist.execute({
            id: 2
        });
    
    expect(playlist).toHaveProperty('id');
    });
});