import Joi from "joi";

export interface CreatePlaylistDto {
    name: string
    userId: string;
    musics: PlaylistMusicDto[]
}

export interface PlaylistMusicDto {
    musicUri: string
}

export const CreatePlaylistDtoSchema = Joi.object<CreatePlaylistDto>({
    name: Joi.string().max(50).required(),
    userId: Joi.string().required(),
    musics: Joi.array().items(Joi.object<PlaylistMusicDto>({
        musicUri: Joi.string().required()
    }))
})