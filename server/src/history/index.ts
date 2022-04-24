import {Router} from "express";
import {validate} from "../commond/validate";
import {CreateHistoryDtoSchema} from "./dtos";
import {resultOf} from "../commond/resultOf";
import {AddHistory, GetHistories} from "./services";

const route = Router()
route.post('/', validate('body', CreateHistoryDtoSchema), resultOf(req => AddHistory(req.body)));

route.get('/', resultOf(req => GetHistories(req.params.id)))


export default route;
