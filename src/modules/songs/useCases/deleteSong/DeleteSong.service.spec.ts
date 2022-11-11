import DeleteSongService from "./DeleteSong.service";

let deleteSong: DeleteSongService;

describe('Delete user', () => {
    beforeAll(async () => {
        deleteSong = new DeleteSongService();
    });

    it('should be able to delete user', async () => {
        const song = await deleteSong.execute({
            id: 2
        });
    
    expect(song).toHaveProperty('id');
    });
});