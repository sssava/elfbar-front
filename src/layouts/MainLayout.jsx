import React from 'react';
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="App">
            <Navbar/>
            <div><Outlet/></div>

        </div>
    );
};

export default MainLayout;