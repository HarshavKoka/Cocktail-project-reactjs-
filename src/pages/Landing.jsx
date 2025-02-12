import React from "react";
import { Outlet } from "react-router";

const Landing = () => {
    return (
        <div>
            <h1>landing</h1>
            <Outlet />
        </div>
    );
};

export default Landing;
