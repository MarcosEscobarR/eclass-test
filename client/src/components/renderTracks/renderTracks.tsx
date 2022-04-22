// @ts-ignore
import styles from "./renderTracks.module.scss";
import React from "react";
import {Item} from "../../models/SpotifyModel";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";

interface IProps {
    items: Item[]
}

const RenderTracks = ({items}: IProps) => {
    if (!items) return <></>;

    return( <>
        <p className={styles.title}>Tracks</p>
        <div className={styles.itemsContainer}>
            {items.map(item => (
                <div className={styles.coverContainer} key={item.id}>
                    {item.album.images?.length ? <img width={"100%"} src={item.album.images[0].url} alt=""/> :
                        <p>No Image</p>
                    }
                    <ReactAudioPlayer controls  src={item.preview_url}/>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    </>)
}

export default RenderTracks
