import React, {useEffect, useState} from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import '../../style/headers.css'
import '../../style/global-1.css'
import Fade from "react-reveal/Fade";

const Headers = () => {
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

    return(
        width < breakpoint ?
            <HeaderMobile />
            :
            <HeaderDesktop />

    )
};

export default Headers