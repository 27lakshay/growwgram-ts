import InfiniteScroll from "react-infinite-scroll-component";

import "./gridView.css";
import Loader from "../../common/Loader/Loader";

export default function GridView(props) {
    const { data, getMoreData, hasMore, viewPostInListView } = props;

    return (
            <div>
                {data.length > 0 ? (
                    <InfiniteScroll
                        dataLength={data.length}
                        next={() => getMoreData()}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        scrollThreshold={1}
                        className={"gv19gridView"}
                        style={{ margin: 0 }}
                    >
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className={`gv19postWrapper`}
                                onClick={() => viewPostInListView(item.id)}
                            >
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
