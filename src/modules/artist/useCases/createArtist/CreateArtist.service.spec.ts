import CreateArtistService from "./CreateArtist.service";

let createArtist: CreateArtistService;

describe('Create artist', () => {
    beforeAll(async () => {
        createArtist = new CreateArtistService();
    });

    it('should be able to create a new artist', async () => {
        const artist = await createArtist.execute({
            id: 1,
            name: 'BTS',
            album: {
                id: 1
            }
        });
    
    expect(artist).toHaveProperty('id');
    expect(artist).toHaveProperty('name');
    });
});