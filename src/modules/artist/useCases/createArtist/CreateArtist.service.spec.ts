import CreateArtistService from "./CreateArtist.service";

let createArtist: CreateArtistService;

describe('Create artist', () => {
    beforeAll(async () => {
        createArtist = new CreateArtistService();
    });

    it('should be able to create a new artist', async () => {
        const artist = await createArtist.execute({
            name: 'Sinara'
        });
    

    expect(artist).toHaveProperty('name');
    });
});