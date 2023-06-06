import React from 'react';
import './Style.css';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ children, to }) => {

    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive && "active"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;