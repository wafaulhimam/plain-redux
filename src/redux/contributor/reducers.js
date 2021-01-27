import { GET_DATA_REQUEST, GET_DATA_ERROR, GET_DATA_SUCCESS} from './actionTypes';

// create initialState
let initialState = {
    data: [],
    isLoading: false,
    isError: false
}

// create reducer
const contributorReducer = (state = initialState, action) => {
    if (action.type === GET_DATA_REQUEST) {
        return {
            ...state,
            isLoading: true,
            isError: false,
            data: []
        }
    } else if (action.type === GET_DATA_ERROR) {
        return {
            ...state,
            isLoading: false,
            isError: true,
            data: []
        }
    } else if (action.type === GET_DATA_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload
        }
    }
    return state;
}

export default contributorReducer;