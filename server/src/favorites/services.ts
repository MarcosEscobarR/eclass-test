import {AddFavoriteDto} from "./dtos";
import {Result} from "../commond/result";
import {AppDataSource} from "../data-source";
import {Favorite} from "./entities/Favorite.entity";

const favoriteRepository = AppDataSource.getRepository(Favorite);

export async function AddFavorite({UserId, MusicUri}: AddFavoriteDto): Promise<Result> {

    
    const favorite = new Favorite(MusicUri, UserId)
    await favoriteRepository.save(favorite)
    
    return Result.created()
}

export async function GetFavorites(userId: string) : Promise<Result> {
    
    const favorites = await favoriteRepository.findBy({UserId: userId})
    return Result.ok(favorites)
}

export async function DeleteFavorite(id: number): Promise<Result> {
    await favoriteRepository.delete({Id: id})
    return Result.ok()
}