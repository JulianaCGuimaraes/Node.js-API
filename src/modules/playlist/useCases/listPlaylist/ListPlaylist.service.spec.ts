import ListPlaylistService from "./ListPlaylist.service";

let listPlaylist: ListPlaylistService;

describe('List playlists', () => {
    beforeAll(async () => {
        listPlaylist = new ListPlaylistService();
    });

    it('should be able to list all playlists', async() => {
        const methodExecute = jest.spyOn(listPlaylist, 'execute');

        await listPlaylist.execute();

        expect(methodExecute).toHaveBeenCalled();
    })
})