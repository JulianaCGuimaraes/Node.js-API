import DeleteArtistService from "./DeleteArtist.service";

let deleteArtist: DeleteArtistService;

describe('Delete artist', () => {
    beforeAll(async () => {
        deleteArtist = new DeleteArtistService();
    });

    it('should be able to delete artist', async () => {
        const user = await deleteArtist.execute({
            id: 2
        });
    
    expect(user).toHaveProperty('id');
    });
});