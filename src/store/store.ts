import { ThunkAction, Action, combineReducers, createStore, applyMiddleware, ThunkDispatch } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import { postsReducer } from "./posts";
import { userReducer } from "./user";

const rootReducer = combineReducers({
    feed: postsReducer,
    user: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export type AppState = ReturnType<typeof store.getState>;
// export type AppDispatch = ThunkDispatch<AppState, void, Action>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
// export type AppThunk<ReturnType = void> = ThunkAction<Promise<ReturnType>, AppState, unknown, Action<string>>;

// export type AppDispatch = typeof store.dispatch;

export type AppDispatch = ThunkDispatch<AppState, void, Action>;
