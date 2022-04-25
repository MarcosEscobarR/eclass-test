import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import {useSelector} from "react-redux";
// @ts-ignore
import styles from './Home.module.scss'
import RenderList from "../../components/renderList/RenderList";
import RenderTracks from "../../components/renderTracks/renderTracks";
import {SpotifyModel} from "../../models/SpotifyModel";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";

function App() {
// @ts-ignore
    const user = useSelector(state => state.user.value)
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
        if (searchKey.length === 0) return;
        
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
    return (
        <div className="App">
            <Header/>
            {
                user ?
                    <div className={styles.container}>
                        <form onSubmit={searchArtists}>
                            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                            <button type={"submit"} className={searchKey.length === 0 ? styles.disabled : null}>Search</button>
                        </form>
                            
                        <div className={styles.main}>
                            <NavBar/>
                            <div className={styles.slider}>
                                <RenderList title="Artists" items={items?.artists.items}/>
                                <RenderList title="Albums" items={items?.albums.items}/>
                                <RenderTracks items={items?.tracks.items!}/>
                            </div>

                        </div>
                    </div>
                    : null
            }
        </div>
    );
}

export default App;
