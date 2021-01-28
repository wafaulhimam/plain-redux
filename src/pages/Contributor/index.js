import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataReq } from '../../redux/contributor/actions';

const Contributor = ({ getDataReqAction, users }) => {
// const Contributor = (props) => {

    useEffect(() => {
        getDataReqAction();
        // props.getDataReqAction();
    }, [getDataReqAction])
    // }, [props])

    console.log('users =>', users);

    return (
        <p>This is Contributor Page</p>
    )
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