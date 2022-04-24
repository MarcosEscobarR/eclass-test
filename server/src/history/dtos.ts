import Joi from "joi";

export interface CreateHistoryDto {
    UserId: string,
    MusicUri: string
}

export const CreateHistoryDtoSchema = Joi.object<CreateHistoryDto>({
    SpotifyId: Joi.string().required(),
    MusicUri: Joi.string().max(100).required()
})
