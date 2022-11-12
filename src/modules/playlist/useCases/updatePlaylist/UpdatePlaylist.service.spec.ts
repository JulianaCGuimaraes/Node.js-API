import UpdatePlaylistService from "./UpdatePlaylist.service";

let updatePlaylist: UpdatePlaylistService;

describe('Update playlist', () => {
    beforeAll(async () => {
        updatePlaylist = new UpdatePlaylistService();
    });

    it('should be able to update playlists', async () => {
        const playlist = await updatePlaylist.execute({
            id: 1,
            name: 'Sinara',
            user:{
                id: 1
            }
        });
    
    expect(playlist).toHaveProperty('id');
    expect(playlist).toHaveProperty('name');
    });
});