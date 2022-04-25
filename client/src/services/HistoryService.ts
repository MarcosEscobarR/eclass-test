import axios from "axios";
import {AddHistoryModel, HistoryModel} from "../models/HistoryModel";

export async function GetHistory(userId: string) {
    return (await axios.get<HistoryModel[]>('http://localhost:5000/api/history', {params: {userId}})).data
}

export async function AddHistory(userId: string, musicUri: string, musicName: string) {
    const body: AddHistoryModel = {UserId: userId, MusicUri: musicUri, MusicName: musicName}
    return await axios.post('http://localhost:5000/api/history', body)
}