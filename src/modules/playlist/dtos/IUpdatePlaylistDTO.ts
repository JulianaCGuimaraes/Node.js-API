export interface IUpdatePlaylistDTO {
    id: number;
    name: string;
    user?: {
        id: number;
        name?: string;
    }
}