import React from 'react'
import '../style/homeCarousel.css'
import HomeCarousel from "../components/HomeCarousel";

const HomeScreen = () => {

    window.onbeforeunload = () => {
        // Clear the local storage
        localStorage.clear()
    };
    return (
        <>
            <HomeCarousel/>
        </>
    )
};

export default HomeScreen