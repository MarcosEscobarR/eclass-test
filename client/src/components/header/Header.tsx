// @ts-ignore
import logo from "../../spotify.png";
import React, {useEffect, useState} from "react";
// @ts-ignore
import style from "./Header.module.scss"
import CustomButton from "../customButton/CustomButton";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/userSlice";
import axios from "axios";
import {UserModel} from "../../models/userModel";

const Header = () => {
    const [token, setToken] = useState("")
    const CLIENT_ID = "4004a8ccaa01421e956b74978af4e534"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const dispatch = useDispatch();
    
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        
        
        if (!token && hash) {
            token = hash!.substring(1).split("&")?.find(elem => elem.startsWith("access_token"))?.split("=")[1]!

            window.location.hash = ""
            window.localStorage.setItem("token", token)

        }
        setToken(token!)

        if (token) {
            GetCurrentUser().then(p => {
                dispatch(setUser({...p.data} as UserModel))
            })
        }

    }, [])

    async function GetCurrentUser() {
        
        return await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    }
    const handleClick = () => {
        if (!token) {
            window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
            return
        }

        setToken("")
        window.localStorage.removeItem("token")
    }
        return (
            <header className={style.AppHeader}>
                <div className={style.logo}>
                    <img src={logo} alt='logo'/>
                    <p>Spotify</p>

                </div>
                <div className={style.btnContainer}>
                    <CustomButton text={token ? 'Logout' : 'Login'} type={"button"} handleClick={handleClick}/></div>
            </header>
        )
    }

    export default Header
