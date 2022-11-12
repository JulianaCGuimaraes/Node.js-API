import CreatePlaylistService from "./CreatePlaylist.service";

let createPlaylist: CreatePlaylistService;

describe('Create song', () => {
    beforeAll(async () => {
        createPlaylist = new CreatePlaylistService();
    });

    it('should be able to create a new song', async () => {
        const playlist = await createPlaylist.execute({
            name: 'Juliana',
            user: {
                id: 1
            }
        });
    

    expect(playlist).toHaveProperty('name');
    });
});