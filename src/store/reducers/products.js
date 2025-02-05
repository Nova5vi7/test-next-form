import actionTypes from "../actions/action-types";
import initialState from "../initialState";

const products = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_PRODUCTS:
			return { ...state, ...action.payload.products };

		default:
			return state;
	}
};

export default products;