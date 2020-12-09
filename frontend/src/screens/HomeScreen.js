import React from 'react'
import '../style/homeCarousel.css'
import HomeCarousel from "../components/HomeCarousel";
import header from '../style/header.css'
import divider from '../images/graphics/divider1.png'

const HomeScreen = () => {

    window.onbeforeunload = () => {
        // Clear the local storage
        localStorage.clear()
    };
    return (
        <>
            <HomeCarousel/>
            {/*     DIVIDER IMAGE      */}
            {/*<img id='dividerImg' className='p-0 m-0' src={divider} alt=""/>*/}
        </>
    )
};

export default HomeScreen