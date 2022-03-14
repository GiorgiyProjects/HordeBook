import "./feed.css"
import Share from "../../components/Share/Share";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async () => {
            const baseURL = process.env.REACT_APP_SERVER_HOST;
            const res = username 
            ? await axios.get(baseURL + "/posts/profile/" + username)
            : await axios.get(baseURL + "/posts/timeline/61eefc929beb6b0af23a37a9");
            setPosts(res.data);
        };
        fetchPosts();
    }, [username]);

    return (
        <div className="feed">
            <Share/>
            {
            posts.map(p => (
                <Post key={p._id} post={p} />
            ))
            }
        </div>
    )
}