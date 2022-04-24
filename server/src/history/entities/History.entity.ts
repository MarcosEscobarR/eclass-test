import {Column, Entity,PrimaryColumn} from "typeorm";

@Entity()
export class History {
    constructor(userId: string, musicUri: string) {
        this.UserId = userId;
        this.MusicUri = musicUri;
        this.ListenedAt = new Date()
    }
    @PrimaryColumn({generated: "increment"})
    Id: number;
    @Column({
        length: 100
    })    MusicUri: string;
    @Column({
        type: "date"
    })
    ListenedAt: Date;
    @Column({unique: true})
    UserId: string
}
