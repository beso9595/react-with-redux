import {MainActions} from "../actions/main";

export const mainReducer = (state = [], action) => {
	switch (action.type) {
		case MainActions.ADD_DATA:
			return {
				...state,
				data: action.data,
			}
		default:
			return state
	}
}
