export interface FavoriteModel {
    Id: number;
    UserId: string;
    MusicUri: string;
    MusicName: string
}

export interface AddFavoriteModel {
    UserId: string,
    MusicUri: string,
    MusicName: string
}