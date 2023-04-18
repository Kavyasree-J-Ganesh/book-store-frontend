const initialDrawerState = {
	
	cart: null,
	
};

export const cartReducer = (state = initialDrawerState, action) => {
	console.log(action)
	switch (action.type) {
        case 'SET_CART':
			return {
				...state,
				cart : action.payload
			};
		default:
			return state;
	}
};