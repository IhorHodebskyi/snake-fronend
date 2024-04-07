export const selectGameIsLoading = state =>
	state.game.isLoading;

export const selectError = state => state.game.error;

export const selectGame = state => state.game.items;
