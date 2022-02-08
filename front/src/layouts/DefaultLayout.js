import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
const DefaultLayout = ({children}) => {

    return(
        <>
        <Navbar/>
        <Outlet />
        {children}
        </>
    )

}

export default DefaultLayout;