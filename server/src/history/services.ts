import {CreateHistoryDto} from "./dtos";
import {History} from "./entities/History.entity";
import {AppDataSource} from "../data-source";
import {Result} from "../commond/result";

const historyRepository = AppDataSource.getRepository(History);
export async function AddHistory({UserId, MusicUri, MusicName}: CreateHistoryDto): Promise<Result> {

    const history = new History(UserId, MusicUri, MusicName);
    await historyRepository.save(history);
    return Result.created();
}

export async function GetHistories(userId: string): Promise<Result> {
    const result = await historyRepository.findBy({UserId: userId})
    return Result.ok(result);
}
