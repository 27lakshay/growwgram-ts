import { Post, UserDetails } from "../types";

export const GET_USER_DETAILS_REQUEST = "userProfile/GET_USER_DETAILS_REQUEST";
export const GET_USER_DETAILS_SUCCESS = "userProfile/GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_FAILURE = "userProfile/GET_USER_DETAILS_FAILURE";

export const GET_USER_PHOTOS_REQUEST = "userProfile/GET_USER_PHOTOS_REQUEST";
export const GET_USER_PHOTOS_SUCCESS = "userProfile/GET_USER_PHOTOS_SUCCESS";
export const GET_USER_PHOTOS_FAILURE = "userProfile/GET_USER_PHOTOS_FAILURE";

export const RESET_USER = "userProfile/RESET_USER";

type GetUserDetailsRequestAction = {
    type: typeof GET_USER_DETAILS_REQUEST;
    payload: {
        loading: boolean;
    };
};

type GetUserDetailsSuccessAction = {
    type: typeof GET_USER_DETAILS_SUCCESS;
    payload: {
        loading: boolean;
        data: {
            userDetails: UserDetails;
        };
    };
};

type GetUserDetailsFailureAction = {
    type: typeof GET_USER_DETAILS_FAILURE;
    payload: {
        loading: boolean;
        error: {
            message: string;
        };
    };
};
type GetUserPhotosRequestAction = {
    type: typeof GET_USER_PHOTOS_REQUEST;
    payload: {
        loading: boolean;
    };
};
type GetUserPhotosSuccessAction = {
    type: typeof GET_USER_PHOTOS_SUCCESS;
    payload: {
        loading: boolean;
        data: {
            userPhotos: Post[];
        };
        page: number;
    };
};
type GetUserPhotosFailureAction = {
    type: typeof GET_USER_PHOTOS_FAILURE;
    payload: {
        loading: boolean;
        error: {
            message: string;
        };
    };
};
type ResetUserAction = {
    type: typeof RESET_USER;
    payload: {
        loading: boolean;
        data: {
            userDetails: null;
            userPhotos: [];
        };
    };
};

export type UserActionTypes =
    | GetUserDetailsRequestAction
    | GetUserDetailsSuccessAction
    | GetUserDetailsFailureAction
    | GetUserPhotosRequestAction
    | GetUserPhotosSuccessAction
    | GetUserPhotosFailureAction
    | ResetUserAction;
// export type UserPhotosActionTypes = GetUserPhotosRequestAction | GetUserDetailsSuccessAction | GetUserDetailsFailureAction;
