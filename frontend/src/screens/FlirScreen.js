import React, {useLayoutEffect} from 'react';
import '../style/flirScreen/Flir.css';
import FlirHero from "../components/flir-screen/FlirHero";
import FlirTable from "../components/flir-screen/FlirTable";
import {Jumbotron, Container} from "reactstrap";
import FlirText from "../components/flir-screen/FlirText";

const FlirScreen = () => {

    // useLayoutEffect(() => {
    //     window.scrollTo(0, 250)
    // });

    return (
        <>
            <FlirHero/>

            <Container>
                <h1 className='FlirScreen_Title'>Airborne FLIR, EO/IR, & Thermography Systems</h1>
            <FlirText/>
            </Container>

                <Jumbotron className='FlirScreen_style bg-transparent' fluid>
                    <FlirTable/>
                </Jumbotron>

        </>
    )
};

export default FlirScreen