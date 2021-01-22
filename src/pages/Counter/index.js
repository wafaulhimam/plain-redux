import React, { useState } from 'react';
import { connect } from 'react-redux';

// const Counter = (props) => {
const Counter = ({ hitungGan, handleAddAction, handleSubtAction }) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubt = () => {
        setCount(count - 1);
    }

    // console.log('props =>', props);
    // console.log('props hitungGan =>', hitungGan);
    return (
        <>
            <p>This is counter page</p>
            <p>You clicked: {count} times</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubt}>Subtract</button>
            <br/>
            ---
            <p>This is counter from redux store</p>
            <p>Kamu ngeklik: {hitungGan} kali</p>
            <button onClick={handleAddAction}>Add</button>
            <button onClick={handleSubtAction}>Subtract</button>
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        hitungGan: state.hitung
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddAction: () => dispatch({ type: 'HANDLE_ADD' }),
        handleSubtAction: () => dispatch({ type: 'HANDLE_SUBT' }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);