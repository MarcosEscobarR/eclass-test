import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import {Playlist} from "./Playlist.entity";

@Entity()
export class PlaylistMusic {
    constructor(musicUri: string) {
        this.MusicUri = musicUri;
    }
    @PrimaryColumn({generated: "increment"})
    Id: number;
    @Column()
    MusicUri: string;
    @ManyToOne(() => Playlist, p => p.PlaylistMusics, {onDelete: "CASCADE"})
    @JoinColumn()
    Playlist: Playlist
}
