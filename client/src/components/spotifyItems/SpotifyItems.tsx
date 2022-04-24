import React, {useEffect, useState} from "react";
import {Item, SpotifyModel} from "../../models/SpotifyModel";
import axios from "axios";
// @ts-ignore
import styles from "./SpotifyItems.module.scss";
import RenderTracks from "../renderTracks/renderTracks";

const Welcome = () => {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [items, setItems] = useState<SpotifyModel>()
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash!.substring(1).split("&")?.find(elem => elem.startsWith("access_token"))?.split("=")[1]!

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token!)

    }, [])
    const searchArtists = async (e: React.FormEvent) => {

        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track,artist,album",
                include_external: 'audio'
            }
        })
        setItems(data)
    }

    const renderList = (items: Item[] | undefined, title: string) => {
        if (!items) return;

        return <div>
            <p className={styles.title}>{title}</p>
            <div className={styles.itemsContainer}>
                {items.map(item => (
                    <div className={styles.coverContainer} key={item.id}>
                        {item.images?.length ? <img width={"100%"} src={item.images[0].url} alt=""/> :
                            <p>No Image</p>
                        }
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    }


    return <>
        <div className={styles.container}>
            <form onSubmit={searchArtists}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
            <div className={styles.main}>
                <div className={styles.slider}>
                    {renderList(items?.artists.items, "Artists  ")}
                    {renderList(items?.albums.items, "Albums")}
                    <RenderTracks items={items?.tracks.items!}/>
                </div>
            </div>
        </div>
    </>
}

export default Welcome