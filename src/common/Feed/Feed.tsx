import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import { PostCard } from "../PostCard";
import Loader from "../Loader/Loader";
import { Post } from "../../store/types";

type Props = {
    data: Post[];
    hydrateFeed: any;
};
export default function Feed(props: Props) {
    const { data, hydrateFeed } = props;

    useEffect(() => {
        // if (scrollToPost) {
        //     let el = document.getElementById(scrollToPost);
        //     el &&
        //         el.scrollIntoView({
        //             behavior: "smooth",
        //             block: "start",
        //         });
        // }
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
                    <PostCard index={index} data={item} />
                ))}
            </InfiniteScroll>
            {/* )} */}
        </div>
    );
}
