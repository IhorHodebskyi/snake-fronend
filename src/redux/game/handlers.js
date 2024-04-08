export const handleFulfilledResults = (
	state,
	{ payload },
) => {
	state.items = payload;
};

export const handleFulfilledUpdateResult = (
	state,
	{ payload },
) => {
	state.items = state.items.map(item => {
		if (item.id === payload.id) {
			return {
				...item,
				highScore: payload.highScore,
			};
		}
		return item;
	});
};

export const handleFulfilled = state => {
	state.isLoading = false;
	state.error = null;
};

export const handlePending = state => {
	state.isLoading = true;
};

export const handleRejected = (state, { error }) => {
	state.isLoading = false;
	state.error = error.message;
};
