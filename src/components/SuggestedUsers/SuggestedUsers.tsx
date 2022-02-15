import { Link } from "react-router-dom";

import "./suggestedUsers.css";
import Loader from "../../common/Loader/Loader";
import { Post } from "../../store/types";

type Props = {
    data: Post[];
};

export default function SuggestedUsers(props: Props) {
    const { data } = props;
    return (
        <section className="su19Wrapper">
            <p>Suggested Users</p>
            {data.length > 0 ? (
                <ul className="su19List">
                    {data.slice(0, 5).map((item: Post) => (
                        <Link key={item.user.id} to={`/${item.user.username}`}>
                            <li className="su19listItem">
                                <span>
                                    <img className="su19Image" src={item.user.profile_image && item.user.profile_image.medium} />
                                </span>
                                <span>
                                    <p className="su19Name">{item.user.name}</p>
                                    <p className="su19userName">@{item.user.username}</p>
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            ) : (
                Array.from(Array(3)).map((_, i) => <Loader key={i} type={"suggestedUser"} />)
            )}
        </section>
    );
}
