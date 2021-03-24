import React, {useLayoutEffect} from 'react';
import '../style/flirScreen/Flir.css';
import FlirHero from "../components/2/flir-screen/FlirHero";
import FlirTable from "../components/2/flir-screen/FlirTable";
import {Jumbotron, Container} from "reactstrap";
import FlirText from "../components/2/flir-screen/FlirText";

const FlirScreen = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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