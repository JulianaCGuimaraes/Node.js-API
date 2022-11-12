export interface ICreatePlaylistDTO {
    id?: number;
    name: string;
    user: {
        id: number;
        name?: string;
    }
}