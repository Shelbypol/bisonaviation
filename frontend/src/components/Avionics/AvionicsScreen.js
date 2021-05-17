import React, {useEffect, useLayoutEffect, useState} from 'react'
import AvionicsCarousel from "./AvionicsCarousel";
import HeaderMobile from "../HeaderFooter/HeaderMobile";
import HeaderDesktop from "../HeaderFooter/HeaderDesktop";
import {useDispatch} from "react-redux";
import Footer from "../HeaderFooter/Footer";


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

