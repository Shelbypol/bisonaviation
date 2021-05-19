import React, {useEffect, useState} from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import './headers.css'
import Fade from "react-reveal/Fade";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);


    const handleWindowResize = () => {
        setWidth(window.innerWidth);

    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);

    }, [width]);


    const breakpoint = 1150;
    // const breakpoint = 620;

    return (
        width < breakpoint ?
            <>
                <Fade top duration={3500}>
                    <HeaderMobile/>
                </Fade>
            </>
            :
            <>
                <Fade top duration={2000}>
                    <HeaderDesktop/>
                </Fade>
            </>

    )
};

export default Header