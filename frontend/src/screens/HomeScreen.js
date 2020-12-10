import React from 'react'
import HomeCarousel from "../components/HomeCarousel";
import divider from '../images/graphics/divider1.png'


const HomeScreen = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };
    return (
        <>
            <HomeCarousel />
            {/*     DIVIDER IMAGE      */}
            {/*<img id='dividerImg' className='p-0 m-0' src={divider} alt=""/>*/}
        </>
    )
};

export default HomeScreen