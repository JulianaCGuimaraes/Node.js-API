import CreateSongService from "./CreateSong.service";

let createSong: CreateSongService;

describe('Create song', () => {
    beforeAll(async () => {
        createSong = new CreateSongService();
    });

    it('should be able to create a new song', async () => {
        const song = await createSong.execute({
            name: 'Intro : Boy Meets Evil',
            album: {
                id: 1
            },
            artist: {
                id: 1
            }
        });
    

    expect(song).toHaveProperty('name');
    });
});