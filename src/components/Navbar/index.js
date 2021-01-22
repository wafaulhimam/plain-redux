import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <p>This is Navbar component</p>
            <Link to='/counter'>Counter</Link>
            <br />
            <Link to='/basket'>basket</Link>
        </>
    )
}

export default Navbar;