import React, {useEffect, useLayoutEffect, useState} from 'react'
import AvionicsCarousel from "../components/Avionics/AvionicsCarousel";
import HeaderMobile from "../components/HeaderFooter/HeaderMobile";
import HeaderDesktop from "../components/HeaderFooter/HeaderDesktop";
import {useDispatch} from "react-redux";
import Footer from "../components/HeaderFooter/Footer";


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
                <HeaderMobile/>
            ) : (
                <>
                    <HeaderDesktop/>
                </>
            )}

            <AvionicsCarousel/>

            <Footer/>
        </>
    )
};

export default AvionicsScreen

