import './Home.scss';
// @ts-ignore
import logo from '../../spotify.png'
import React from "react";
import Header from "../../components/header/Header";
import SpotifyItems from "../../components/spotifyItems/SpotifyItems";
import {useSelector} from "react-redux";

function App() {
// @ts-ignore
    const user = useSelector(state => state.user.value)
    return (
        <div className="App">
            <Header/>
            {
                user ? <SpotifyItems/> : null
            }
        </div>
    );
}

export default App;
