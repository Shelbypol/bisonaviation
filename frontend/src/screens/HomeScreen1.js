import React, {useState} from 'react'
import HomeHero from '../components/1/HomeHero'
import '../style/global-1.css'


const HomeScreen1 = () => {

    window.onbeforeunload = () => {
        localStorage.clear()
    };

    return (
        <>
            <HomeHero title={'Bison Aviation'}
                      text1={'We work hard on the ground'}
                      text2={'so you can fly with confidence'}

            />
        </>

    )
};
    export default HomeScreen1