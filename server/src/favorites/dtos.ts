import Joi from "joi";

export interface AddFavoriteDto {
    MusicUri: string,
    UserId: string,
    MusicName: string
}

export const AddFavoriteDtoSchema = Joi.object<AddFavoriteDto>({
    MusicUri: Joi.string().required(),
    MusicName: Joi.string().required(),
    UserId: Joi.string().required()
})