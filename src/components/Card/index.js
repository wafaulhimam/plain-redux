import React from 'react-redux';
import PropTypes from 'prop-types';

const Card = ({ fname, lname, email, id, img }) => {
    return (
        <> 
            <p>---</p>
            <p>email: {email} </p>
            <p>no ktp: {id} </p>
            <p>name: {fname} {lname}</p>
            <img src={img} alt='hai' />
            <p>---</p>
        </>
    )
}

Card.propTypes = {
    fname: PropTypes.string,
    lname: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
}

Card.defaultProps = {
    fname: '',
    lname: '',
    email: 'rahasia@rahasia.com',
    id: null,
    img: null,
}

export default Card;

