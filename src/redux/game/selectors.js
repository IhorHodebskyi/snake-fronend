import { createSelector } from "@reduxjs/toolkit";

export const selectGameIsLoading = state =>
	state.game.isLoading;

export const selectError = state => state.game.error;

export const selectGame = state => state.game.items;

export const selectRecord = createSelector(
	[selectGame],
	items => {
		return (
			items.length > 0 &&
			items
				.filter(el => el.high_score > 0)
				.sort((a, b) =>
					a.high_score < b.high_score ? 1 : -1,
				)
		);
	},
);
