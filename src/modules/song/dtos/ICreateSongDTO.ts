export interface ICreateSongDTO {
    id?: number;
    name: string;
    album: {
        id: number;
        name?: string;
    },
    artist: {
        id: number;
        name?: string;    
    }
}