import {CreatePlaylistDto} from "./dtos";
import {Result} from "../commond/result";
import {AppDataSource} from "../data-source";
import {Playlist} from "./entities/Playlist.entity";
import {PlaylistMusic} from "./entities/PlaylistMusic.entity";

const playlistRepository = AppDataSource.getRepository(Playlist);

export async function CreatePlaylist({userId, musics, name}: CreatePlaylistDto): Promise<Result> {
    const playlistMusics = musics.map(p => new PlaylistMusic(p.musicUri));
    await AppDataSource.getRepository(PlaylistMusic).save(playlistMusics)
    const playlist = new Playlist(name, userId, playlistMusics)
    await playlistRepository.save(playlist)

    return Result.created();
}

export async function GetPlaylists(userId: string): Promise<Result> {
    const playlists = await playlistRepository.findBy({UserId: userId})
    return Result.ok(playlists)
}

export async function GetPlaylist(id: number): Promise<Result> {
    const playlist = await playlistRepository.findOne({where: {Id: id}, relations: {PlaylistMusics: true}})
    return Result.ok(playlist)
}

export async function DeletePlaylist(id: number) {
    const result = await playlistRepository.delete({Id: id})
    if (result.affected === 0) 
        return Result.notFound("Playlist no encotrado")
    
    return Result.ok()
}