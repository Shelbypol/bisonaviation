import React, {useEffect, useLayoutEffect, useState} from 'react'
import MechanicsHero from "../components/mechanics-screen/MechanicsHero";
import AvionicsIcons from "../components/avionics-Screen/AvionicsIcons";
import {useDispatch} from "react-redux";
import MobileHeader from "../components/Headers-Nav-Footer/MobileHeader";
import StickyHeader from "../components/Headers-Nav-Footer/StickyHeader";
import Footer from "../components/Headers-Nav-Footer/Footer";
import DesktopHeader from "../components/Headers-Nav-Footer/DesktopHeader";


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

                <MechanicsHero/>
                <AvionicsIcons/>
                <Footer/>
        </>
    )
};

export default MaintenanceScreen