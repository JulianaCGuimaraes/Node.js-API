import ListArtistService from "./ListArtist.service";

let listArtist: ListArtistService;

describe('List artists', () => {
    beforeAll(async () => {
        listArtist = new ListArtistService();
    });

    it('should be able to list all artists', async() => {
        const methodExecute = jest.spyOn(listArtist, 'execute');

        await listArtist.execute();

        expect(methodExecute).toHaveBeenCalled();
    })
})