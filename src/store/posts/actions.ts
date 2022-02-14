import { Dispatch } from "redux";
import { AppThunk } from "../store";
import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, FeedActionTypes } from "./actionTypes";
import { fetchRandomPhotos } from "../../utils/api";
import { Post } from "../types";

export const getPosts = (): AppThunk => async (dispatch: Dispatch<FeedActionTypes>, getState) => {
    try {
        dispatch({ type: GET_POSTS_REQUEST, payload: { loading: true } });
        let store = getState();
        let pageOffset = store.feed.page;
        const response: Post[] = await fetchRandomPhotos(pageOffset);
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: { loading: false, data: { posts: response }, page: pageOffset + 1 },
        });
    } catch (e) {
        dispatch({
            type: GET_POSTS_FAILURE,
            payload: {
                loading: false,
                error: {
                    message: "Something went wrong",
                },
            },
        });
        console.log(e);
    }
};
