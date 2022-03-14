import "./rightbar.css"
import CakeIcon from '@mui/icons-material/Cake';
import {Posts, Users} from "../../dummyData"
import Online from "../../components/Online/Online"
import Post from "../Post/Post";

export default function Rightbar({user}) {

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <CakeIcon className="birthdayImg"/>
                    <span className="birthdayText">
                            {" "}
                        <b>Sauron</b> and <b>Saurman</b> have birthday today!
                        </span>
                </div>
                <img className="rightbarAd" src="../assets/ad1.jpg" alt=""/>
                <img className="rightbarAd" src="../assets/ad22.jpg" alt=""/>
                <h4 className="rightbarTitle"> Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightBar = (user) => {
        return (
            <>
            <h4>Orc info</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{(user.relationship === 1) ? "Single" : (user.relationship === 2) ? "Married" : "Undefined" }</span>
                    </div>
                </div>
                <h4 className="rightbarTitle"> Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };
    //if (profile) return ProfileRightBar;
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    );
}