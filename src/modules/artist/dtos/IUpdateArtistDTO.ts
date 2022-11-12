export interface IUpdateArtistDTO {
    id: number;
    name: string;
    album?:{
        id: number;
        name?: string;
    }
}