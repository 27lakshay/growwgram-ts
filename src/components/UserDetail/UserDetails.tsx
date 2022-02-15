import "./userDetails.css";
import { useEffect } from "react";
import { UserDetails } from "../../store/types";

type Props = {
    data: UserDetails;
};
export default function UserDetail(props: Props) {
    const { data } = props;

    return (
        <section className="pp19userDetailsWrapper">
            <span className="pp19userImageWrapper">
                <img className="pp19userImage" src={data.profile_image && data.profile_image.large} />
            </span>
            <span className="pp19userDetails">
                <h4 className="pp19userFullName">{data.name && data.name}</h4>
                <p className="pp19Username">@{data.username && data.username}</p>
                <p className="pp19Bio">{data.bio && data.bio}</p>
                <div className="pp19Stats">
                    <span className="pp19totalPosts">
                        <strong>{data.total_photos && data.total_photos}</strong> posts
                    </span>
                    <span className="pp19followersCount">
                        <strong>{data.followers_count && data.followers_count}</strong> followers
                    </span>
                    <span className="pp19followingCount">
                        <strong>{data.following_count && data.following_count}</strong> following
                    </span>
                </div>
            </span>
        </section>
    );
}
