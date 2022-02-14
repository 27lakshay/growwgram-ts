import "./userDetails.css";
import { useEffect } from "react";

export default function UserDetails(props: any) {
    // const { name, username, bio, total_photos, followers_count, following_count } = props.data;
    useEffect(() => {
        console.log(props);
    }, [props]);

    return (
        <section className="pp19userDetailsWrapper">
            <span className="pp19userImageWrapper">
                {/* <img className="pp19userImage" src={profile_image && profile_image.large} /> */}
            </span>
            <span className="pp19userDetails">
                <h4 className="pp19userFullName">{props.data.name && props.data.name}</h4>
                {/* <p className="pp19Username">@{username && username}</p>
                <p className="pp19Bio">{bio && bio}</p>
                <div className="pp19Stats">
                    <span className="pp19totalPosts">
                        <strong>{total_photos && total_photos}</strong> posts
                    </span>
                    <span className="pp19followersCount">
                        <strong>{followers_count && followers_count}</strong> followers
                    </span>
                    <span className="pp19followingCount">
                        <strong>{following_count && following_count}</strong> following
                    </span>
                </div> */}
            </span>
        </section>
    );
}
