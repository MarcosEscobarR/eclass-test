import {Router} from "express";
import {validate} from "../commond/validate";
import {resultOf} from "../commond/resultOf";
import {AddFavorite, DeleteFavorite, GetFavorites} from "./services";
import {AddFavoriteDtoSchema} from "./dtos";

const route = Router()
route.post('/', validate('body', AddFavoriteDtoSchema), resultOf(req => AddFavorite(req.body)));

route.get('/', resultOf(req => GetFavorites(req.params.userId)))

route.delete('/:id', resultOf(req => DeleteFavorite(req.params.id)))

export default route;
