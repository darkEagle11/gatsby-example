import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./layout.css";

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
}

export default layout;
