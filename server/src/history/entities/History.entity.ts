import {Column, Entity,PrimaryColumn} from "typeorm";

@Entity()
export class History {
    constructor(userId: string, musicUri: string, musicName: string) {
        this.UserId = userId;
        this.MusicUri = musicUri;
        this.ListenedAt = new Date()
        this.MusicName = musicName
    }
    @PrimaryColumn({generated: "increment"})
    Id: number;
    @Column()
    MusicUri: string;
    @Column({
        length: 20
    })
    MusicName: string
    @Column({
        type: "date"
    })
    ListenedAt: Date;
    @Column({unique: false})
    UserId: string
}
