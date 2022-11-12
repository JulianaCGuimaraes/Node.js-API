export interface IUpdateSongDTO {
    id: number;
    name: string;
    album?: {
        id: number;
        name?: string;
    };
    artist?: {
        id: number;
        name?: string;
    };
}