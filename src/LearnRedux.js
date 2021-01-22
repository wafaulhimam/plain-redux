import React from 'react';
import { createStore } from 'redux';

const LearnRedux = () => {
    // console.log('createStore =>', createStore());
    console.log('redux =>');

    const store = createStore();
    // console.log('store =>', store);
    return (
        <p>Hi this is learn redux</p>
    )
}
// const redux = require('redux');

export default LearnRedux