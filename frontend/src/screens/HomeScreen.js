import React from 'react'
import HomeJumbotron from "../components/HomeJumbotron";

const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HomeJumbotron />
        </>
    )
};

export default HomeScreen