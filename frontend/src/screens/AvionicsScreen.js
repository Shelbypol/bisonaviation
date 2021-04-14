import React, {useEffect, useLayoutEffect, useState} from 'react'
import AvionicsHero from "../components/avionics-Screen/AvionicsHero";
import MobileHeader from "../components/Headers-Nav-Footer/MobileHeader";
import StickyHeader from "../components/Headers-Nav-Footer/StickyHeader";
import {useDispatch} from "react-redux";
import Footer from "../components/Headers-Nav-Footer/Footer";
import DesktopHeader from "../components/Headers-Nav-Footer/DesktopHeader";


const AvionicsScreen = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1000;

    const dispatch = useDispatch();

    useEffect(() => {

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [dispatch, width]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    return (
        <>

            {width < breakpoint ? (
                <MobileHeader/>
            ) : (
                <>
                    <DesktopHeader/>
                </>
            )}

            <AvionicsHero/>

            <Footer/>
        </>
    )
};

export default AvionicsScreen

