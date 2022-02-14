import { Reducer } from "redux";
import { FeedState } from "../types";
import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, FeedActionTypes } from "./actionTypes";

const initialState: FeedState = {
    data: {
        posts: [],
    },
    loading: false,
    page: 1,
    error: {
        message: "",
    },
};

export const postsReducer: Reducer<FeedState, FeedActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return { ...state, loading: action.payload.loading };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                data: { posts: [...state.data.posts, ...action.payload.data.posts] },
                loading: action.payload.loading,
                page: action.payload.page,
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: action.payload.loading,
                error: { message: action.payload.error.message },
            };
        default:
            return state;
    }
};
