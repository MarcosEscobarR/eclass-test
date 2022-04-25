import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Favorite {
    constructor(musicUri: string, userId: string, musicName: string) {
        this.MusicUri = musicUri;
        this.UserId = userId;
        this.MusicName = musicName
    }
    @PrimaryColumn({generated: "increment"})
    Id: number;
    @Column()
    MusicUri: string;
    @Column()
    MusicName: string
    @Column()
    UserId: string
}
