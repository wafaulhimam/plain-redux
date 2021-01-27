import { GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS } from './actionTypes';

// export const getDataReq = () => ({
//         type: GET_DATA_REQUEST
// })

export const getDataReq = () => {
    return {
        type: GET_DATA_REQUEST
    }
}

export const getDataError = () => {
    return {
        type: GET_DATA_ERROR
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload
    }
}

