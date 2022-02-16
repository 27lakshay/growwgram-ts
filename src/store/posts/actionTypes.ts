import { Post } from "../types";

export const GET_POSTS_REQUEST = "feed/GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "feed/GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "feed/GET_POSTS_FAILURE";

type GetFeedRequestAction = {
    type: typeof GET_POSTS_REQUEST;
    payload: {
        loading: boolean;
    };
};

type GetFeedSuccessAction = {
    type: typeof GET_POSTS_SUCCESS;
    payload: {
        loading: boolean;
        data: {
            posts: Post[];
        };
        page: number;
        newData: Post[];
    };
};

type GetFeedFailureAction = {
    type: typeof GET_POSTS_FAILURE;
    payload: {
        loading: boolean;
        error: {
            message: string;
        };
    };
};

export type FeedActionTypes = GetFeedRequestAction | GetFeedSuccessAction | GetFeedFailureAction;
