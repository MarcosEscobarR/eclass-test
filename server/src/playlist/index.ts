import {Router} from "express";
import {validate} from "../commond/validate";
import {resultOf} from "../commond/resultOf";
import {CreatePlaylistDtoSchema} from "./dtos";
import {CreatePlaylist, DeletePlaylist, GetPlaylist, GetPlaylists} from "./services";

const router = Router()

router.post('/',
    validate("body", CreatePlaylistDtoSchema),
    resultOf(req => CreatePlaylist(req.body))
)

router.get('/', resultOf(req => GetPlaylists(req.params.userId)))
router.get('/:id', resultOf(req => GetPlaylist(req.params.id)))
router.delete('/:id', resultOf(req => DeletePlaylist(req.params.id)))

export default router;