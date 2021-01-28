import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDataReq } from '../../redux/contributor/actions';
import Card from '../../components/Card';

const Contributor = ({ getDataReqAction, users }) => {
// const Contributor = (props) => {

    useEffect(() => {
        getDataReqAction();
        // props.getDataReqAction();
    }, [getDataReqAction])
    // }, [props])

    console.log('users =>', users);

    return (
        <>
            <p>This is Contributor Page</p>
            {users.map((user, index) => (
                <li key={index}>
                    <Card
                        fname={user.first_name}
                        lname={user.last_name}
                        email={user.email}
                        id={user.id}
                        img={user.avatar}
                    />
                </li>
            ))}
        </>
    )
}

Contributor.propTypes = {
    getDataReqAction: PropTypes.func,
    users: PropTypes.array
}

Contributor.defaultProps = {
    getDataReqAction: null,
    users: [],
}

const mapStateToProps = (state) => {
    return {
        users: state.contributor.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataReqAction: () => dispatch(getDataReq()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contributor);