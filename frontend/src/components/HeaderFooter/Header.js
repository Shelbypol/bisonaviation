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
                <Fade top duration={3500}>
                    <HeaderMobile/>
                </Fade>
            </>
            :
            <>
                {/*<Row className='position-fixed m-0 p-0' style={{top: '1vh'}}>*/}
                {/*    <Col xs={12} className='m-0 p-0'>*/}
                        {/*<Fade top duration={2000} className='position-fixed' style={{top: '1vh'}}>*/}
                        <HeaderDesktop/>
                    {/*</Col>*/}
                {/*</Row>*/}
            </>

    )
};

export default Header