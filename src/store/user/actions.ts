import { Dispatch } from "redux";
import { AppThunk } from "../store";
import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    GET_USER_PHOTOS_REQUEST,
    GET_USER_PHOTOS_SUCCESS,
    GET_USER_PHOTOS_FAILURE,
    UserActionTypes,
    RESET_USER,
} from "./actionTypes";
import { fetchUserDetails, fetchUserPhotos } from "../../utils/api";
import { Post, UserDetails } from "../types";

export const getUserDetails =
    (username: string): AppThunk =>
    async (dispatch: Dispatch<UserActionTypes>, getState) => {
        try {
            dispatch({ type: GET_USER_DETAILS_REQUEST, payload: { loading: true } });
            const response: UserDetails = await fetchUserDetails(username);
            dispatch({
                type: GET_USER_DETAILS_SUCCESS,
                payload: { loading: false, data: { userDetails: response } },
            });
        } catch (e) {
            dispatch({
                type: GET_USER_DETAILS_FAILURE,
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

export const getUserPhotos =
    (username: string): AppThunk =>
    async (dispatch: Dispatch<UserActionTypes>, getState) => {
        try {
            dispatch({ type: GET_USER_PHOTOS_REQUEST, payload: { loading: true } });
            let store = getState();
            let pageOffset = store.user.page;
            const response: Post[] = await fetchUserPhotos(username, pageOffset);
            dispatch({
                type: GET_USER_PHOTOS_SUCCESS,
                payload: { loading: false, data: { userPhotos: response }, page: pageOffset + 1 },
            });
        } catch (e) {
            dispatch({
                type: GET_USER_PHOTOS_FAILURE,
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

export const resetUser = () => {
    return {
        type: RESET_USER,
        payload: {
            data: {
                userDetails: null,
                userPhotos: [],
            },
            loading: false,
            page: 1,
            error: {
                message: "",
            },
        },
    };
};
