import React, {useEffect, useState} from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import '../../style/Headers.css'

const Headers = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);

    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [width]);


    const breakpoint = 620;

    return(
        width < breakpoint ? <MobileHeader /> : <DesktopHeader />

    )
};

export default Headers