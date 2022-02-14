import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useParams } from "react-router-dom";

import "./profilePage.css";
import { getUserDetails, getUserPhotos } from "../../store/user/actions";
import Feed from "../../common/Feed/Feed";
import UserDetails from "../../components/UserDetails/UserDetails";
import GridView from "../../components/GridView/GridView";
import Loader from "../../common/Loader/Loader";

export default function ProfilePage() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [postListView, setPostListView] = useState(null);
    const [isSticky, setIsSticky] = useState(false);

    const params = useParams();
    const dispatch = useAppDispatch();
    const { userDetails, userPhotos } = useAppSelector((state) => state.user.data);

    function hydrateFeed(id: string) {
        dispatch(getUserPhotos(id));
    }

    // function changeTab(index) {
    //     setSelectedTab(index);
    // }

    // function viewPostInListView(item) {
    //     setPostListView(item);
    //     changeTab(1);
    // }

    

    useEffect(() => {
        if (params.username) dispatch(getUserDetails(params.username));
        if (params.username) hydrateFeed(params.username);
        return () => {
            dispatch({ type: "RESET_USER" });
        };
    }, [dispatch, params.username]);

    const handleTabsVisibility = () => {
        if (window.scrollY >= 400) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleTabsVisibility);
        return () => window.removeEventListener("scroll", handleTabsVisibility);
    }, []);
    return (
        <main className="pp19Wrapper">
            {/* <UserDetails data={userDetails} /> */}
            {/* <section className="pp19photosWrapper">
                <div className={`tb19tabsButton ${isSticky ? "sticky" : ""}`}>
                    <button className={`tb19tabBtn ${selectedTab ? "" : "active-tab"}`} onClick={() => changeTab(0)}>
                        All Photo's
                    </button>
                    <button className={`tb19tabBtn ${selectedTab ? "active-tab" : ""}`} onClick={() => changeTab(1)}>
                        Timeline
                    </button>
                </div>
                {selectedTab ? (
                    <Feed data={user.photos} getMoreData={hydrateFeed} scrollToPost={postListView} />
                ) : (
                    <GridView
                        data={user.photos}
                        getMoreData={hydrateFeed}
                        viewPostInListView={viewPostInListView}
                        hasMore={user.newData.length > 0 ? true : false}
                    />
                )}
            </section> */}
        </main>
    );
}
