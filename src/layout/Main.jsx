import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import WarningMessage from '../pages/Home/WarningMessage';

const Main = () => {
    return (
        <div>
            <WarningMessage></WarningMessage>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;