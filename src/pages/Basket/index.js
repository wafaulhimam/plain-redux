import React from 'react';
import { connect } from 'react-redux';

const Basket = ({ totalBasket }) => {
    return (
        <>
            <p>This is basket</p>
            <p>Totalnya: {totalBasket}</p>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        totalBasket: state.hitung
    }
}

export default connect(mapStateToProps)(Basket);