import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';

export default function Share() {
    return (
        <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="sharedProfilePic" src="../assets/orc.jpg"></img>
                        <input  placeholder="Whats on your mind?" type="text" className="shareInput" />
                    </div>
                    <hr className="shareHr" />
                    <div className="shareBottom">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText"> Photo or Video </span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText"> Tag </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText"> Emoji </span>
                        </div>
                        <div className="shareOption">
                            <RoomIcon htmlColor="black" className="shareIcon"/>
                            <span className="shareOptionText"> Location </span>
                        </div>
                        <button className="shareButton">
                            Share
                        </button>
                    </div>
                </div>
        </div>
    )
}