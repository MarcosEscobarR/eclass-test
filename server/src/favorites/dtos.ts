import Joi from "joi";

export interface AddFavoriteDto {
    MusicUri: string,
    UserId: string
}

export const AddFavoriteDtoSchema = Joi.object<AddFavoriteDto>({
    MusicUri: Joi.string().max(100).required(),
    UserId: Joi.string().required()
})