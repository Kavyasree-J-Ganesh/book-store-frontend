const initialDrawerState = {
	
	books: [],
	
};

export const bookReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
        case 'SET_BOOKS':
			return {
				...state,
				books : action.payload
			};
		default:
			return state;
	}
};

