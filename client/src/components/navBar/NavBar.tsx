// @ts-ignore
import styles from './NavBar.module.scss'
import {useEffect} from "react";
import {GetHistory} from "../../services/HistoryService";
import {useDispatch, useSelector} from "react-redux";
import {HistoryModel} from "../../models/HistoryModel";
import ReactAudioPlayer from "react-audio-player";
import {FavoriteModel} from "../../models/FavoriteModel";
import {GetFavorites, RemoveFavorite} from "../../services/FavoritesService";
import {setHistory} from "../../store/historySlice";
import {setFavorites} from "../../store/favoriteSlice";
import CustomButton from "../customButton/CustomButton";

const NavBar = () => {
    // @ts-ignore
    const user = useSelector(state => state.user.value)
    // @ts-ignore
    const history = useSelector(state => state.history?.value as HistoryModel[])
    // @ts-ignore
    const favorites = useSelector(state => state.favorite?.value as FavoriteModel[])
    const dispatch = useDispatch()

    useEffect(() => {
        GetHistory(user?.id).then(h => dispatch(setHistory(h)))
        GetFavorites(user?.id).then(f => dispatch(setFavorites(f)))
    }, [])

    async function handleRemoveFavorite(id: number) {
        await RemoveFavorite(id);
        GetFavorites(user?.id).then(f => dispatch(setFavorites(f)))
    }

    return <div className={styles.container}>
        <p className={styles.title}>Historial</p>
        {
            history?.map(h => (
                <div key={h.MusicUri} className={styles.soundItem}>
                    <p>{h.MusicName}</p>
                    <ReactAudioPlayer controls src={h.MusicUri}/>
                </div>
            ))
        }

        <p className={styles.title}>Favoritos</p>
        {
            favorites?.map(f => (
                <div key={f.MusicUri} className={styles.soundItem}>
                    <p>{f.MusicName}</p>
                    <ReactAudioPlayer controls src={f.MusicUri}/>
                    <CustomButton text="Eliminar" handleClick={() => handleRemoveFavorite(f.Id)} type={"button"}/>
                </div>
            ))
        }
    </div>
}

export default NavBar;