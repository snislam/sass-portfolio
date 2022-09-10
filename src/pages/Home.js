import React from 'react';
import "../styles/css/banner.min.css"
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Features />
            <Services />
            <Footer/>
        </div>
    );
};

export default Home;