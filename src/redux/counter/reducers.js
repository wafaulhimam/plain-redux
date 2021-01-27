import { HANDLE_ADD, HANDLE_SUBT } from './actionTypes';
// import { types } from './actionTypes';

// Langkah ke-3. Buat Initial State
let initialState = {
    hitung: 666,
}  

// Langkah ke-2. Create Reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === HANDLE_ADD) {
      return {
        ...state,
        hitung: state.hitung + 1
      }
    } else if (action.type === HANDLE_SUBT) {
        return {
          ...state,
          hitung: state.hitung - 1
        }
    }
    return state;
}

export default counterReducer;