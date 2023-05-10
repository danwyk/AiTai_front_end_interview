import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return [...state, action.payload];

		case 'REMOVE_PRODUCT':
			return state.filter(product => product.name !== action.payload);

		default:
			return state;
	}
};


const locationsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_LOCATION':
			return [...state, action.payload];

		case 'REMOVE_LOCATION':
			return state.filter(location => location.city !== action.payload);

		default:
			return state;
  	}
};


// const rootReducer = combineReducers({
// 	products: productsReducer,
// 	locations: locationsReducer
// });

export default productsReducer;