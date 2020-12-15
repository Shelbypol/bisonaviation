import React from 'react'
import HeroJumbotron from "../components/HeroJumbotron";

const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HeroJumbotron imgClass={'jumboImg'} />
            <HeroJumbotron imgClass={'jumboImg2'} />
        </>
    )
};

export default HomeScreen