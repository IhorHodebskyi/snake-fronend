export const handleFulfilledGame = (state, { payload }) => {
	state.items = payload;
};

export const handleFulfilledUpdateGame = (
	state,
	{ payload },
) => {
	state.items = state.items.map(item => {
		if (item._id === payload._id) {
			return {
				...item,
				name: payload.name,
				score: payload.score,
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
