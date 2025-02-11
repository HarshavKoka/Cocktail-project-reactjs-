import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            {/* <Link to="/about">About page</Link> */}
            <section className="page">
                <Outlet />
            </section>
        </>
    );
};

export default HomeLayout;
