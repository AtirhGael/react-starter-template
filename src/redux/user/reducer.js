import { types } from "./types";

const initialState = {
	loading: false,
	error: null,
	data: null
}

const ExampleReducer = (state = initialState , action ) => {
	switch(action.type){
		case types.GET_SUCCESS:
			return {loading: false, data: action.payload};
	
		case types.GET_REQUEST:
			return {...state, loading: true};
		
		case types.GET_FAILURE:
			return {...state, loading: false, error: action.payload};
		
		default: return state
	}
}

export default ExampleReducer;
