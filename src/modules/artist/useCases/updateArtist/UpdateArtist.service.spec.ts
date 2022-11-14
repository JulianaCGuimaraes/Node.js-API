import UpdateArtistService from "./UpdateArtist.service";

let updateArtist: UpdateArtistService;

describe('Update artist', () => {
    beforeAll(async () => {
        updateArtist = new UpdateArtistService();
    });

    it('should be able to update a artists', async () => {
        const artist = await updateArtist.execute({
            id: 4,
            name: 'João',
            album:{
                id: 1
            }
        });
    
    expect(artist).toHaveProperty('id');
    expect(artist).toHaveProperty('name');
    });
});