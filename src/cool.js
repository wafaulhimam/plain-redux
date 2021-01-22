// import { redux } from 'redux';

// inisialisasi import redux
const redux = require('redux');

// test console redux
console.log('redux =>', redux);

// tes console string
console.log('halo gais this is redux');

// create instance store from createStore redux
const createStore = redux.createStore;

// Step by step creating redux

// create initialState
const initialState = {
    nilai: 0,
    usia: 20
}

// 2. reducer -  we can only change data (state) only with this reducer, actually tthis function is a function
const rootReducer = (state = initialState, action) => {
    console.log('action gan =>', action);
    if(action.type === 'ADD_AGE') {
        return {
            ...state,
            usia: state.usia + 1
            // usia: Object.assign({}, state.usia + 1)
        }
    }
    if (action.type === 'GANTI_NILAI') {
        return {
            ...state,
            // nilai: state.nilai + 12
            nilai: state.nilai + action.nilaiBaru
        }
    }
    return state; 
}
// 1. store - the brain, data (state) will be store here
const store = createStore(rootReducer);
console.log('store =>', store);
console.log('store gan =>', store.getState());

// 4. subscription - proses penggunaan store
store.subscribe(() => {
    console.log('store chnage subs =>', store.getState())
})

// 3. action - proses pemanggilan reducer, bentuknya object
store.dispatch({type: 'ADD_AGE'});
store.dispatch({ type: 'GANTI_NILAI', nilaiBaru: 12})
console.log('store kedua =>', store.getState())


