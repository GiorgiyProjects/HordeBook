import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
    return (
        <div className="BigContainer">
            <Topbar/>
            <div className="profileContainer">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/cover.jpg"/>
                            <img className="profileUserImg" src="assets/orc.jpg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Babak</h4>
                            <h4 className="profileInfoDesc">For the horde!!!</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}