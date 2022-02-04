import "./post.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {Users} from "../../dummyData";
import {useState} from "react";

export default function Post({post}) {
    const user = Users.filter(u=>u.id === post.userId)[0];
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1: like + 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postAvatar" src={user.profilePicture}></img>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate"> 5 minutes ago </span>
                    </div>
                    <div className="postTopRight">
                        <ExpandMoreIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"> {post?.desc} </span>
                    <img src={post.photo} className="postImg"></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorderIcon className="postLove"/>
                        <ThumbUpOffAltIcon className="postLike" onClick={likeHandler}/>
                        <span className="postLikeCounter"> {like} orcs like it </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}