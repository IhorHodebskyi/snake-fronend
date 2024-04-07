import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	handleFulfilled,
	handleFulfilledUpdateGame,
	handleFulfilledGame,
	handlePending,
	handleRejected,
} from "./handlers";
import { addGame, fetchGame } from "./operations";

const gameSlice = createSlice({
	name: "game",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchGame.fulfilled, handleFulfilledGame)
			.addCase(addGame.fulfilled, handleFulfilledUpdateGame)
			.addMatcher(
				action => action.type.endsWith("/fulfilled"),
				handleFulfilled,
			)
			.addMatcher(
				action => action.type.endsWith("/pending"),
				handlePending,
			)
			.addMatcher(
				action => action.type.endsWith("/rejected"),
				handleRejected,
			),
});

export const gameReducer = gameSlice.reducer;
