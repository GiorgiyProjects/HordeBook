import "./online.css"

export default function Online({user}) {
    if (!user)
        return null;
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={process.env.REACT_APP_PUBLIC_FOLDER + user.profilePicture}/>
                <span className="rightbarOnline"></span>
                <span className="rightbarUserName"> {user.username} </span>
            </div>
        </li>
    )
}