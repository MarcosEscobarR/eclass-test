export interface HistoryModel {
    UserId: string;
    ListenedAt: Date;
    MusicUri: string;
    MusicName: string
}

export interface AddHistoryModel {
    UserId: string,
    MusicUri: string,
    MusicName: string
}