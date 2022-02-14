import { useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
    const { id, user, urls, description, likes } = props.data;
    const [postLikeStatus, setPostLikeStatus] = useState({ count: likes, liked: false });

    function handleLike() {
        if (postLikeStatus.liked) {
            setPostLikeStatus((prev) => ({ count: prev.count - 1, liked: false }));
            return;
        }
        setPostLikeStatus((prev) => ({ count: prev.count + 1, liked: true }));
        return;
    }

    return (
        <div id={id} className="p19Wrapper">
            <div className="p19Head">
                <Link to={`/${user.username}`}>{user.username}</Link>
                <i className="fas fa-ellipsis-h" />
            </div>
            <div className="p19Body">
                <img className="p19Picture" src={urls.small} />
            </div>
            <div className="p19Footer">
                <div className="p19Options">
                    <button className={`p19Option ${postLikeStatus.liked ? "liked" : ""}`} onClick={() => handleLike()}>
                        {postLikeStatus.liked ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
                        <span>{postLikeStatus.count} likes</span>
                    </button>
                    <button className="p19Option">
                        <i className="fas fa-share" />
                    </button>
                    <button className="p19Option">
                        <i className="fas fa-save" />
                    </button>
                </div>
                <div className="p19Description">
                    <strong>{user.username}</strong> {description ? description : "Uploaded a new picture"}
                </div>
            </div>
        </div>
    );
}
