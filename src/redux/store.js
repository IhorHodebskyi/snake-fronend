import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "redux/auth/slice";

import storage from "redux-persist/lib/storage";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import { gameReducer } from "./game/gameSlice";

const authPersistConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};

export const store = configureStore({
	reducer: {
		game: gameReducer,
		auth: persistReducer(authPersistConfig, authReducer),
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [
					FLUSH,
					PAUSE,
					REHYDRATE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		});
	},
	devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
