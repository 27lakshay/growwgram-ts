import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import "./homePage.css";
import { Feed } from "../../common/Feed";
import { SuggestedUsers } from "../../components/SuggestedUsers";
import { getPosts } from "../../store/posts/actions";

export default function HomePage() {
    const dispatch = useAppDispatch();
    const { data, loading, newData } = useAppSelector((state) => state.feed);

    function hydrateFeed() {
        dispatch(getPosts());
    }

    useEffect(() => {
        hydrateFeed();
    }, [dispatch]);

    return (
        <main className="hp19Wrapper">
            <Feed data={data.posts} hydrateFeed={hydrateFeed} loading={newData.length > 0 ? true : false} />
            <SuggestedUsers data={data.posts} />
        </main>
    );
}
