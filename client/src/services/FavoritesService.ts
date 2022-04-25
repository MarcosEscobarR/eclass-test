import axios from "axios";
import {AddFavoriteModel, FavoriteModel} from "../models/FavoriteModel";

export async function GetFavorites(userId: string) {
    return (await axios.get<FavoriteModel[]>('http://localhost:5000/api/favorites',{params: {userId}})).data
}

export async function AddFavorite(userId: string, musicUri: string, musicName: string) {
    const body: AddFavoriteModel = {UserId: userId, MusicUri: musicUri, MusicName: musicName}
    return await axios.post('http://localhost:5000/api/favorites', body)
}

export async function RemoveFavorite(id: number) {
    return await axios.delete(`http://localhost:5000/api/favorites/${id}`)
}