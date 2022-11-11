import UpdateSongService from "./UpdateSong.service";


let updateSong: UpdateSongService;

describe('Update song', () => {
    beforeAll(async () => {
        updateSong = new UpdateSongService();
    });

    it('should be able to update songs', async () => {
        const song = await updateSong.execute({
            id: 1,
            name: 'Sinara',
            album:{
                id: 1
            },
            artist: {
                id: 1
            }
        });
    
    expect(song).toHaveProperty('id');
    expect(song).toHaveProperty('name');
    });
});