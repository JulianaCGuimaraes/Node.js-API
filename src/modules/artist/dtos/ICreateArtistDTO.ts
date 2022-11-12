export interface ICreateArtistDTO {
    id?: number;
    name: string;
    album:{
        id: number;
        name?: string;
    }
}