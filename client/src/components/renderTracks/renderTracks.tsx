// @ts-ignore
import styles from "./renderTracks.module.scss";
import React from "react";
import {Item} from "../../models/SpotifyModel";
import ReactAudioPlayer from "react-audio-player";
import {AddHistory, GetHistory} from "../../services/HistoryService";
import {AddFavorite, GetFavorites} from '../../services/FavoritesService'
import {useDispatch, useSelector} from "react-redux";
import {setHistory} from "../../store/historySlice";
import {setFavorites} from "../../store/favoriteSlice";

interface IProps {
    items: Item[]
}



const RenderTracks = ({items}: IProps) => {
    const dispatch = useDispatch();

    // @ts-ignore
    const user = useSelector(state => state.user.value)

    if (!items) return <></>;

    async function handlePlay(musicUri: string, musicName: string) {
        await AddHistory(user?.id, musicUri, musicName)
        const history = await GetHistory(user?.id);
        dispatch(setHistory(history))
    }
    async function handleClick(name: string, preview_url: any) {
        await AddFavorite(user.id, preview_url, name)
        const favorites = await GetFavorites(user.id)
        dispatch(setFavorites(favorites))
    }
    return( <>
        <p className={styles.title}>Tracks</p>
        <div className={styles.itemsContainer}>
            {items.map(item => (
                <div className={styles.coverContainer} key={item.id}>
                    {item.album.images?.length ? <img width={"100%"} src={item.album.images[0].url} alt=""/> :
                        <p>No Image</p>
                    }
                    <ReactAudioPlayer controls onPlay={() => handlePlay(item.preview_url, item.name)} src={item.preview_url}/>
                    <p>{item.name}</p>
                    <button className={styles.addFavorite} onClick={() => handleClick(item.name, item.preview_url)}>Add Favorite</button>
                </div>
            ))}
        </div>
    </>)
}

export default RenderTracks
