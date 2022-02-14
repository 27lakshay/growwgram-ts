import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import "./homePage.css";
import { Feed } from "../../common/Feed";
import { SuggestedUsers } from "../../components/SuggestedUsers";
import { getPosts } from "../../store/posts/actions";

function HomePage() {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((state) => state.feed);

    function hydrateFeed() {
        dispatch(getPosts());
    }

    useEffect(() => {
        hydrateFeed();
    }, [dispatch]);

    return (
        <main className="hp19Wrapper">
            <Feed
                data={data.posts}
                hydrateFeed={hydrateFeed}
                hasMore={data.posts.length > 0 ? true : false}
                loading={loading}
            />
            <SuggestedUsers data={data.posts} />
        </main>
    );
}

export default HomePage;
