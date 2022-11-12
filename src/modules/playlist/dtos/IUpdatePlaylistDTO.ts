export interface IUpdatePlaylistDTO {
    id: number;
    name: string;
    user?: {
        id: number;
        name?: string;
    },
    song?: {
        id: number;
        name?: string;
        albumId?: number;
        artistId?: number;
    }
}