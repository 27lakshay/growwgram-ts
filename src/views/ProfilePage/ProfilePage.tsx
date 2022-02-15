import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store";
import { useParams } from "react-router-dom";

import "./profilePage.css";
import { getUserDetails, getUserPhotos, resetUser } from "../../store/user/actions";
import { Feed } from "../../common/Feed";
import { UserDetail } from "../../components/UserDetail";
import { GridView } from "../../components/GridView";
import { Loader } from "../../common/Loader";

export default function ProfilePage() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [postListView, setPostListView] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    const params = useParams();
    const thunkDispatch = useAppDispatch();
    const dispatch = useDispatch();
    const { userDetails, userPhotos } = useAppSelector((state) => state.user.data);

    function hydrateFeed() {
        if (params.username) thunkDispatch(getUserPhotos(params.username));
    }

    function changeTab(index: number) {
        setSelectedTab(index);
    }

    function viewPostInListView(item: string | null) {
        setPostListView(item);
        changeTab(1);
    }

    useEffect(() => {
        if (params.username) thunkDispatch(getUserDetails(params.username));
        if (params.username) hydrateFeed();
        return () => {
            dispatch(resetUser());
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
            {userDetails && <UserDetail data={userDetails} />}
            <section className="pp19photosWrapper">
                <div className={`tb19tabsButton ${isSticky ? "sticky" : ""}`}>
                    <span className={`tb19tabBtn ${selectedTab ? "" : "active-tab"}`} onClick={() => changeTab(0)}>
                        All Photo's
                    </span>
                    <span className={`tb19tabBtn ${selectedTab ? "active-tab" : ""}`} onClick={() => changeTab(1)}>
                        Timeline
                    </span>
                </div>
                {selectedTab ? (
                    <Feed data={userPhotos} hydrateFeed={hydrateFeed} />
                ) : (
                    <GridView
                        data={userPhotos}
                        hydrateFeed={hydrateFeed}
                        viewPostInListView={viewPostInListView}
                        // hasMore={user.newData.length > 0 ? true : false}
                    />
                )}
            </section>
        </main>
    );
}
