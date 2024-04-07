import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
	handleFulfilled,
	handleFulfilledResults,
	handleFulfilledUpdateResult,
	handlePending,
	handleRejected,
} from "./handlers";
import { updateResult, fetchResults } from "./operations";

const gameSlice = createSlice({
	name: "game",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(
				fetchResults.fulfilled,
				handleFulfilledResults,
			)
			.addCase(
				updateResult.fulfilled,
				handleFulfilledUpdateResult,
			)
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
