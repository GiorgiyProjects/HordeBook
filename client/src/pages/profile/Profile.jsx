import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./profile.css";
import {useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router';

export default function Profile() {

    const [user, setUser] = useState([]);
    const username = useParams().username;
    useEffect(()=>{
        const fetchUser = async () => {
            const baseURL = process.env.REACT_APP_SERVER_HOST;
            console.log(baseURL + `/users/`);
            const res = await axios.get(baseURL + `/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return (
        <div className="BigContainer">
            <Topbar/>
            <div className="profileContainer">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={process.env.REACT_APP_PUBLIC_FOLDER + "cover.jpg"}/>
                            <img className="profileUserImg" src={user.profilePicture ||  process.env.REACT_APP_PUBLIC_FOLDER + "no_ava.png"}/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <h4 className="profileInfoDesc">{user.desc}</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username = {username}/>
                        <Rightbar user = {user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}