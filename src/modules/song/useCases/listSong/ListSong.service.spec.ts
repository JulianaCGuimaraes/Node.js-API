import ListSongService from "./ListSong.service";

let listSong: ListSongService;

describe('List songs', () => {
    beforeAll(async () => {
        listSong = new ListSongService();
    });

    it('should be able to list all songs', async() => {
        const methodExecute = jest.spyOn(listSong, 'execute');

        await listSong.execute();

        expect(methodExecute).toHaveBeenCalled();
    })
})