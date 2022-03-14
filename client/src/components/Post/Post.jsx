import "./post.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js"
import {Link} from "react-router-dom"

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const fetchUser = async () => {
            const baseURL = process.env.REACT_APP_SERVER_HOST;
            
            const res = await axios.get(baseURL + `/users/?userId=${post.userId}`);
            setUser(res.data);
        };
        console.log(user);
        fetchUser();
    }, [post.userId]);

    console.log(post);
    console.log(user);

    const likeHandler = () => {
        setLike(isLiked ? like - 1: like + 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to = {`/profile/${user.username}`} style={{textDecoration:"none"}}>
                            <img className="postAvatar" src={user.profilePicture || process.env.REACT_APP_PUBLIC_FOLDER + "ad1.jpg"}></img>
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate"> {format(post.createdAt)} </span>
                    </div>
                    <div className="postTopRight">
                        <ExpandMoreIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText"> {post?.desc} </span>
                    <img src={post.img.startsWith("http") ? post.img : process.env.REACT_APP_PUBLIC_FOLDER + "/" + post.img} className="postImg"></img>
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