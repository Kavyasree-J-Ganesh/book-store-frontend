import { createStore, combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import { cartReducer } from './cartReducer';


const reducer = combineReducers({
	book: bookReducer,
    cart: cartReducer
});

const store = createStore(reducer)

export default store;