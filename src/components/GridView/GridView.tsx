import InfiniteScroll from "react-infinite-scroll-component";

import "./gridView.css";
import Loader from "../../common/Loader/Loader";
import { Post } from "../../store/types";

type Props = {
    data: Post[];
    hydrateFeed: any;
    viewPostInListView: (id: string) => void;
};
export default function GridView(props: Props) {
    const { data, hydrateFeed, viewPostInListView } = props;

    return (
        <div>
            {data.length > 0 ? (
                <InfiniteScroll
                    dataLength={data.length}
                    next={hydrateFeed}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollThreshold={1}
                    className={"gv19gridView"}
                    style={{ margin: 0 }}
                >
                    {data.map((item) => (
                        <div key={item.id} className={`gv19postWrapper`} onClick={() => viewPostInListView(item.id)}>
                            <img className="gv19Post" src={item.urls.small} />
                        </div>
                    ))}
                </InfiniteScroll>
            ) : (
                <div className="gv19Wrapper gv19gridView">
                    {Array.from(Array(10)).map((_, i) => (
                        <Loader key={i} type={"image"} />
                    ))}
                </div>
            )}
        </div>
    );
}
