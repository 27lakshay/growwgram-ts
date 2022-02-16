import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import { PostCard } from "../PostCard";
import { Loader } from "../../common/Loader";
import { Post } from "../../store/types";

type Props = {
    data: Post[];
    hydrateFeed: any;
    loading?: boolean;
};
export default function Feed(props: Props) {
    const { data, hydrateFeed, loading } = props;

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
        </div>
    );
}
