import { Reducer } from "redux";
import { UserProfileState } from "../types";
import {
    UserActionTypes,
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    GET_USER_PHOTOS_REQUEST,
    GET_USER_PHOTOS_SUCCESS,
    GET_USER_PHOTOS_FAILURE,
    RESET_USER,
} from "./actionTypes";

const initialState: UserProfileState = {
    data: {
        userDetails: null,
        userPhotos: [],
    },
    loading: false,
    page: 1,
    error: {
        message: "",
    },
};

export const userReducer: Reducer<UserProfileState, UserActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS_REQUEST:
            return { ...state, loading: action.payload.loading };
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                data: { userDetails: action.payload.data.userDetails, userPhotos: state.data.userPhotos },
            };
        case GET_USER_DETAILS_FAILURE:
            return { ...state, loading: action.payload.loading, error: { message: action.payload.error.message } };
        case GET_USER_PHOTOS_REQUEST:
            return { ...state, loading: action.payload.loading };
        case GET_USER_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                data: {
                    userPhotos: [...state.data.userPhotos, ...action.payload.data.userPhotos],
                    userDetails: state.data.userDetails,
                },
                page: action.payload.page,
            };
        case GET_USER_PHOTOS_FAILURE:
            return { ...state, loading: action.payload.loading, error: { message: action.payload.error.message } };
        case RESET_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
