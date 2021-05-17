import React, {useEffect, useLayoutEffect, useState} from 'react'
import MaintenanceHero from "../components/maintenance-page/MaintenanceHero";
import AvionicsIcons from "../components/Avionics/AvionicsIcons";
import {useDispatch} from "react-redux";
import MobileHeader from "../components/Header/MobileHeader";
import StickyHeader from "../components/Header/StickyHeader";
import Footer from "../components/Header/Footer";


const MaintenanceScreen = () => {

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
                    <StickyHeader/>
                </>
            )}

                <MaintenanceHero/>
                <AvionicsIcons/>
                <Footer/>
        </>
    )
};

export default MaintenanceScreen