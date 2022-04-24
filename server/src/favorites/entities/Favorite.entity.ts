import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";

@Entity()
export class Favorite {
    constructor(musicUri: string, userId: string) {
        this.MusicUri = musicUri;
        this.UserId = userId;
    }
    @PrimaryColumn({generated: "increment"})
    Id: number;
    @Column({
        length: 100
    }) 
    MusicUri: string;
    @Column({unique: true})
    UserId: string
}
