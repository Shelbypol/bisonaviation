import React, {useEffect, useLayoutEffect, useState} from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import {Row, Col} from 'react-bootstrap';
import './HeaderDesktop.css'
import Fade from "react-reveal/Fade";
import {useDispatch} from "react-redux";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 1150;

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
        width < breakpoint ?
            <>
                <Fade top duration={2000}>
                    <HeaderMobile/>
                </Fade>
            </>
            :
            <>
                    <HeaderDesktop/>
            </>

    )
};

export default Header