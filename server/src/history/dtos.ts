import Joi from "joi";

export interface CreateHistoryDto {
    UserId: string,
    MusicUri: string,
    MusicName:string
}

export const CreateHistoryDtoSchema = Joi.object<CreateHistoryDto>({
    UserId: Joi.string().required(),
    MusicUri: Joi.string().required(),
    MusicName: Joi.string().required(),
})
