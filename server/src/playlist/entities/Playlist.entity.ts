import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import {PlaylistMusic} from "./PlaylistMusic.entity";

@Entity()
export class Playlist {
    constructor(name: string, userId: string, musics: PlaylistMusic[]) {
        this.Name = name;
        this.UserId = userId;
        this.PlaylistMusics = musics;
    }
    
    @PrimaryColumn({generated: "increment"})
    Id: number;
    @Column({
        length: 50
    })
    Name: string;
    @Column({unique: true})
    UserId: string
    @OneToMany(() => PlaylistMusic, p => p.Playlist, {onDelete: "CASCADE"})
    PlaylistMusics: PlaylistMusic[]
}
