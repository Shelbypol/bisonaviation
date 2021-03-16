import React from 'react';

import '../style/flirScreen/Flir.css';
import FlirHero from "../components/2/flir-screen/FlirHero";
import FlirTable from "../components/2/flir-screen/FlirTable";
import {Jumbotron} from "reactstrap";
import FlirText from "../components/2/flir-screen/FlirText";

const FlirScreen = () => {
    return (
        <>
            <FlirHero/>

            <FlirText/>

                <Jumbotron className='FlirScreen_style bg-transparent' fluid>
                    <FlirTable/>
                </Jumbotron>

        </>
    )
};

export default FlirScreen