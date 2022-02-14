import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import Post from "../Post/Post";
import Loader from "../Loader/Loader";

export default function Feed(props: any) {
    const { data, getMoreData, scrollToPost, loading, hydrateFeed } = props;

    useEffect(() => {
        if (scrollToPost) {
            let el = document.getElementById(scrollToPost);
            el &&
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }
    }, []);

    return (
        <div className="f19Wrapper">
            {/* {loading ? (
                Array.from(Array(5)).map((_, i) => <Loader key={i} type={"post"} />)
            ) : ( */}
            <InfiniteScroll
                dataLength={data.length}
                next={hydrateFeed}
                hasMore={true}
                loader={<Loader type={"post"} />}
                scrollThreshold={0.8}
                className={"f19listView"}
            >
                {data.map((item: any, index: number) => (
                    <Post key={index} data={item} />
                ))}
            </InfiniteScroll>
            {/* )} */}
        </div>
    );
}
