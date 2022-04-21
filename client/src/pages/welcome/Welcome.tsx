import './welcome.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {SpotifyModel} from "../../models/SpotifyModel";
import Header from "../../components/header/Header";


const Welcome = () => {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [items, setItems] = useState<SpotifyModel>({} as SpotifyModel)
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        console.log(token)
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

    const renderArtists = () => {
        return items.artists?.items.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return <>
        <div className="container">
            <Header/>
            <form onSubmit={searchArtists}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>

            {renderArtists()}


        </div>
    </>
}

export default Welcome

