const redux = require('redux');

// buat inisial state
let initialState = {
    usia: 25 ,
    nilai: 0,
}

// BUAT KONSTANTA ACTION TYPES, SUPAYA MENGHINDARI KESALAHAN KETIK ATAU TYPO
const TAMBAH_USIA = 'TAMBAH_USIA';
const TAMBAH_NILAI = 'TAMBAH_NILAI';

//reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === TAMBAH_USIA) {
        return {
            ...state,
            usia: state.usia + 10,
        }
    } else if (action.type === TAMBAH_NILAI) {
        return {
            ...state,
            nilai: state.nilai + action.payload
        }
    }
    console.log('action =>', action);
    console.log('state =>', state);
    return state;
}

//store
const store = redux.createStore(rootReducer); //buat storenya, pake fungsi 
// console.log('store =>', store);
console.log('get State =>', store.getState());


// action - yang dikirim, bentuknya object
store.dispatch({type: TAMBAH_USIA});
store.dispatch({type: TAMBAH_NILAI, payload: 555});
console.log('get State di action =>', store.getState());
