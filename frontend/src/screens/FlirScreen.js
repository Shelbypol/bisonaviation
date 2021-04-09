import React, {useEffect, useLayoutEffect, useState} from 'react';
import '../style/flirScreen/Flir.css';
import FlirHero from "../components/flir-screen/FlirHero";
import FlirTable from "../components/flir-screen/FlirTable";
import {Jumbotron, Container} from "reactstrap";
import FlirText from "../components/flir-screen/FlirText";
import HeroDivider from "../components/HeroDivider";
import MobileHeader from "../components/Headers-Nav-Footer/MobileHeader";
import StickyHeader from "../components/Headers-Nav-Footer/StickyHeader";
import Footer from "../components/Headers-Nav-Footer/Footer";
import {useDispatch} from "react-redux";

const FlirScreen = () => {

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

            <HeroDivider
                img={'FlirHero_img'}
                showImg={true}
                title={'EO/IR - FLIR'}
                showDivider={true}
            />

<Container className=' global_HeroDivider-margin pt-5'>


                <h1 className='FlirScreen_Title'>Airborne FLIR, EO/IR, & Thermography Systems</h1>
            <FlirText/>
            {/*</Container>*/}

                <Jumbotron className='FlirScreen_style bg-transparent p-0 m-0' fluid>
                    <FlirTable/>
                </Jumbotron>
</Container>

            <Footer />
        </>
    )
};

export default FlirScreen